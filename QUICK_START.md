# Payload CMS - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Set up Database (Choose one option)

**Recommended: Neon (No Docker needed)**

1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Paste it into `.env.local`:

```env
DATABASE_URI=your-neon-connection-string-here
```

See [DATABASE_OPTIONS.md](./DATABASE_OPTIONS.md) for more options.

### Step 2: Install Dependencies (if not done yet)

```bash
yarn install
```

### Step 3: Start Development Server

```bash
yarn dev
```

### Step 4: Create Admin User

1. Open [http://localhost:3000/admin](http://localhost:3000/admin)
2. Fill in the "Create First User" form
3. Click "Create"

### Step 5: Add Content

1. **Upload Images:**
   - Go to "Media" in admin panel
   - Click "Create New"
   - Upload an image and add alt text
   - Save

2. **Create a Project:**
   - Go to "Projects" in admin panel
   - Click "Create New"
   - Fill in:
     - Title (e.g., "Riverside District")
     - Description (short summary)
     - Full Description (detailed info)
     - Hero Image (select from media)
     - Gallery (add multiple images)
     - Features (add amenities)
     - Highlights (add key points)
   - Click "Save"

3. **View on Frontend:**
   - Go to [http://localhost:3000](http://localhost:3000)
   - Your project should appear!

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (payload)/           # CMS routes (admin panel & API)
│   ├── projects/[id]/       # Project detail pages
│   └── page.tsx            # Homepage (fetches from CMS)
├── collections/            # CMS content types
│   ├── Projects.ts         # Projects collection
│   ├── Media.ts           # Media/images collection
│   └── Users.ts           # Admin users
└── util/
    ├── payloadQueries.ts   # Data fetching functions
    └── transformPayloadData.ts  # Data transformation

payload.config.ts           # CMS configuration
```

---

## 🔧 Common Commands

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

---

## 🎯 Key URLs

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Admin Panel:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **API:** [http://localhost:3000/api](http://localhost:3000/api)

---

## 📚 Collections Explained

### Projects
Real estate development projects shown on the homepage and detail pages.

**Required fields:**
- Title
- Slug (auto-generated from title)
- Description (short text for cards)
- Full Description (rich text with formatting)
- Hero Image

**Optional fields:**
- Gallery (multiple images)
- Features (list of amenities)
- Highlights (key selling points)
- CTA Link (call-to-action URL)

### Media
All images and files used across the site.

**Fields:**
- File (image upload)
- Alt text (for accessibility)

Auto-generates multiple sizes:
- Thumbnail (400x300)
- Card (768x1024)
- Tablet (1024px wide)

### Users
Admin users who can access the CMS.

**Fields:**
- Email (login credential)
- Password
- Name

---

## 🚀 Deployment to Netlify

### 1. Set up Production Database

Create a production database on Neon:
1. Create new project (e.g., "shay-compass-prod")
2. Copy connection string

### 2. Configure Netlify

Add environment variables in Netlify dashboard:

```env
DATABASE_URI=your-production-database-url
PAYLOAD_SECRET=<generate-with: openssl rand -base64 32>
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
```

### 3. Deploy

```bash
git add .
git commit -m "Add Payload CMS integration"
git push origin main
```

Netlify will automatically build and deploy!

### 4. Create Admin User on Production

1. Visit `https://yourdomain.com/admin`
2. Create your admin user
3. Start adding content

---

## ⚠️ Important Notes

### Environment Variables
- Never commit `.env.local` to git (already in `.gitignore`)
- Use different `PAYLOAD_SECRET` for dev and production
- Use different databases for dev and production

### Media Files
- Uploaded files go to `public/media/` (git-ignored)
- In production, they're stored on your server
- For better performance, consider cloud storage later

### Database
- Schema updates happen automatically in development
- In production, test schema changes carefully
- You can export/import data between environments

---

## 🐛 Troubleshooting

### "Cannot connect to database"
✅ Check `DATABASE_URI` in `.env.local`
✅ Restart dev server: Stop and run `yarn dev` again

### "No projects showing"
✅ Add projects in admin panel first
✅ Check browser console for errors
✅ Verify database connection

### Admin panel shows errors
✅ Clear Next.js cache: `rm -rf .next && yarn dev`
✅ Check all dependencies installed: `yarn install`

### Changes not appearing
✅ Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
✅ Check you saved the content in admin panel

---

## 📖 Full Documentation

- [PAYLOAD_SETUP.md](./PAYLOAD_SETUP.md) - Complete setup guide
- [DATABASE_OPTIONS.md](./DATABASE_OPTIONS.md) - Database configuration options
- [Payload CMS Docs](https://payloadcms.com/docs) - Official documentation

---

## ✅ Integration Checklist

- [x] Payload CMS installed
- [x] Collections created (Projects, Media, Users)
- [x] Database configured
- [x] Admin panel accessible at `/admin`
- [x] Frontend fetches from CMS
- [x] Project detail pages use CMS data
- [x] Image uploads working
- [x] Netlify deployment configured

---

## 🎉 You're All Set!

The integration is complete. Here's what changed:

1. **Homepage** now fetches projects from CMS instead of hardcoded data
2. **Project pages** dynamically load from CMS
3. **Admin panel** at `/admin` for content management
4. **Media management** for images
5. **Database** stores all content
6. **Netlify ready** for deployment

Start by adding your first project in the admin panel, and it will automatically appear on your site!
