# Payload CMS Integration Guide

This document provides instructions for setting up and using Payload CMS with this Next.js application.

## Table of Contents
- [Local Development Setup](#local-development-setup)
- [Database Setup](#database-setup)
- [Accessing the Admin Panel](#accessing-the-admin-panel)
- [Managing Content](#managing-content)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Local Development Setup

### Prerequisites
- Node.js 20 or higher
- Yarn package manager
- Docker and Docker Compose (for local PostgreSQL)

### Environment Variables

The project uses environment variables defined in `.env.local`:

```env
# Database - PostgreSQL
DATABASE_URI=postgresql://payload:payload@localhost:5432/shay_compass

# Payload CMS secret key
PAYLOAD_SECRET=your-secret-key-change-this-to-something-random

# Next.js URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Important:** Change `PAYLOAD_SECRET` to a random string in production. Generate one with:
```bash
openssl rand -base64 32
```

### Installation Steps

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Start PostgreSQL database:**
   ```bash
   docker-compose up -d
   ```

   This will start a PostgreSQL container with:
   - Host: `localhost`
   - Port: `5432`
   - Database: `shay_compass`
   - Username: `payload`
   - Password: `payload`

3. **Run database migrations:**

   The first time you start the application, Payload will automatically create the necessary database tables.

4. **Start the development server:**
   ```bash
   yarn dev
   ```

5. **Open your browser:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## Database Setup

### Docker (Recommended for Local Development)

The `docker-compose.yml` file provides a PostgreSQL database:

```yaml
services:
  postgres:
    image: postgres:16-alpine
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: payload
      POSTGRES_PASSWORD: payload
      POSTGRES_DB: shay_compass
```

**Commands:**
- Start: `docker-compose up -d`
- Stop: `docker-compose down`
- View logs: `docker-compose logs -f postgres`
- Reset database: `docker-compose down -v && docker-compose up -d`

### Production Database

For production on Netlify, you'll need an external PostgreSQL database. Options include:

1. **Neon** (Recommended for Netlify)
   - Free tier available
   - Serverless Postgres
   - [https://neon.tech](https://neon.tech)

2. **Supabase**
   - Free tier available
   - Additional features (auth, storage)
   - [https://supabase.com](https://supabase.com)

3. **Railway**
   - Simple PostgreSQL hosting
   - [https://railway.app](https://railway.app)

Update `DATABASE_URI` in your Netlify environment variables with your production database connection string.

## Accessing the Admin Panel

### First-Time Setup

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
2. You'll see a "Create First User" form
3. Fill in:
   - Email: Your email address
   - Password: A secure password
   - Name: Your name (optional)
4. Click "Create"

### Subsequent Logins

1. Go to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Enter your email and password
3. Click "Login"

## Managing Content

### Collections

The CMS has three main collections:

#### 1. Projects
Manage real estate development projects.

**Fields:**
- **Title** (required): Project name
- **Slug** (auto-generated): URL-friendly identifier
- **Description** (required): Short description for cards
- **Full Description** (required): Detailed project overview (rich text)
- **Hero Image** (required): Main project image
- **Gallery**: Array of additional project images
- **Features**: Array of amenities and features
- **Highlights/Technologies**: Array of key selling points
- **CTA Link**: Optional link for "Schedule Tour" button

**Adding a Project:**
1. Go to Admin Panel → Projects
2. Click "Create New"
3. Fill in all required fields
4. Upload hero image and gallery images to Media first
5. Click "Save"

#### 2. Media
Manage all images and files.

**Features:**
- Automatic image optimization
- Multiple size variants (thumbnail, card, tablet)
- Alt text for accessibility

**Uploading Media:**
1. Go to Admin Panel → Media
2. Click "Create New"
3. Upload image file
4. Add descriptive alt text
5. Click "Save"

#### 3. Users
Manage admin users who can access the CMS.

**Adding Users:**
1. Go to Admin Panel → Users
2. Click "Create New"
3. Enter email, password, and name
4. Click "Save"

### Content Workflow

1. **Upload Media First**: Before creating projects, upload all images to the Media collection
2. **Create Projects**: Reference uploaded media in your projects
3. **Preview**: Changes are reflected immediately on the frontend
4. **Edit Anytime**: All content can be updated through the admin panel

## Deployment

### Netlify Deployment

1. **Set up your database:**
   - Create a PostgreSQL database (Neon, Supabase, etc.)
   - Copy the connection string

2. **Configure Netlify environment variables:**
   - `DATABASE_URI`: Your PostgreSQL connection string
   - `PAYLOAD_SECRET`: Random secret key (generate with `openssl rand -base64 32`)
   - `NEXT_PUBLIC_SERVER_URL`: Your production URL (e.g., `https://yourdomain.com`)

3. **Deploy:**
   ```bash
   git push origin main
   ```

   Netlify will automatically build and deploy your site.

4. **Run migrations (first deployment only):**

   After the first deployment, you may need to manually run migrations if the database wasn't initialized. This typically happens automatically on first request to the admin panel.

5. **Create your first admin user:**
   - Visit `https://yourdomain.com/admin`
   - Create your first user
   - Start adding content!

### Build Configuration

The `netlify.toml` file configures the build:

```toml
[build]
  command = "yarn build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Troubleshooting

### Common Issues

#### "Failed to connect to database"
**Solution:**
- Ensure Docker is running: `docker-compose ps`
- Check database logs: `docker-compose logs postgres`
- Verify `DATABASE_URI` in `.env.local`

#### "Payload secret is required"
**Solution:**
- Ensure `PAYLOAD_SECRET` is set in `.env.local`
- Generate a new secret: `openssl rand -base64 32`

#### "Cannot find module '@payload-config'"
**Solution:**
- The config file should be at the root: `payload.config.ts`
- Ensure `tsconfig.json` includes the payload config

#### "No projects showing on homepage"
**Solution:**
- Check that you've added projects in the admin panel
- Check browser console for errors
- Verify database connection is working

#### Admin panel returns 404
**Solution:**
- Ensure the admin route exists: `src/app/(payload)/admin/[[...segments]]/page.tsx`
- Check Next.js dev server is running
- Clear `.next` cache and restart: `rm -rf .next && yarn dev`

### Database Management

#### View database contents:
```bash
docker exec -it shay-compass-db psql -U payload -d shay_compass
```

#### Common PostgreSQL commands:
- List tables: `\dt`
- Describe table: `\d table_name`
- Query data: `SELECT * FROM projects;`
- Exit: `\q`

#### Reset local database:
```bash
docker-compose down -v
docker-compose up -d
yarn dev  # Migrations will run automatically
```

### Production Debugging

#### Enable Payload logs:
Add to `payload.config.ts`:
```ts
debug: true,
```

#### Check Netlify function logs:
- Go to Netlify dashboard
- Navigate to Functions tab
- View logs for errors

## File Structure

```
shay-compass/
├── src/
│   ├── app/
│   │   ├── (payload)/          # Payload routes (isolated from main layout)
│   │   │   ├── admin/          # Admin panel
│   │   │   ├── api/            # REST API endpoints
│   │   │   ├── layout.tsx      # Minimal layout for Payload
│   │   │   └── importMap.ts    # Auto-generated
│   │   ├── projects/[id]/      # Project detail pages
│   │   └── page.tsx            # Homepage
│   ├── collections/            # Payload collection definitions
│   │   ├── Projects.ts
│   │   ├── Media.ts
│   │   └── Users.ts
│   └── util/                   # Utility functions
│       ├── getPayload.ts       # Payload instance
│       ├── payloadQueries.ts   # Data fetching
│       └── transformPayloadData.ts  # Data transformation
├── public/
│   └── media/                  # Uploaded images (git-ignored)
├── payload.config.ts           # Payload configuration
├── docker-compose.yml          # Local PostgreSQL
├── netlify.toml                # Deployment config
└── .env.local                  # Environment variables
```

## Next Steps

After completing the setup:

1. **Add your first project** through the admin panel
2. **Customize collections** in `src/collections/` to match your needs
3. **Extend the CMS** by adding more collections (e.g., Team Members, Testimonials)
4. **Configure media storage** for production (Vercel Blob, S3, etc.)

## Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Netlify Documentation](https://docs.netlify.com/)

## Support

If you encounter issues:
1. Check this documentation
2. Review the [Payload CMS Discord](https://discord.gg/payload)
3. Check the [GitHub issues](https://github.com/payloadcms/payload/issues)
