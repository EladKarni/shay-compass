# Database Setup Options

Since you don't have Docker available, here are alternative options for setting up PostgreSQL for local development and production:

## Option 1: Neon (Recommended - Free & Serverless)

Neon is a serverless PostgreSQL provider with a generous free tier, perfect for both development and production.

### Setup Steps:

1. **Sign up for Neon:**
   - Go to [https://neon.tech](https://neon.tech)
   - Click "Sign Up" (free account)
   - Verify your email

2. **Create a database:**
   - Click "New Project"
   - Name: `shay-compass`
   - Region: Choose closest to you
   - PostgreSQL version: 16 (default)
   - Click "Create Project"

3. **Get connection string:**
   - After project creation, you'll see connection details
   - Copy the connection string (it looks like):
     ```
     postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require
     ```

4. **Update `.env.local`:**
   ```env
   DATABASE_URI=your-neon-connection-string-here
   ```

5. **Start development:**
   ```bash
   yarn dev
   ```

### Advantages:
- ✅ No local installation needed
- ✅ Free tier (1 project, 10 GB storage)
- ✅ Perfect for Netlify deployment
- ✅ Automatic backups
- ✅ Built-in connection pooling

---

## Option 2: Supabase (Free with extra features)

Supabase provides PostgreSQL with additional features like authentication and storage.

### Setup Steps:

1. **Sign up:**
   - Go to [https://supabase.com](https://supabase.com)
   - Create account

2. **Create project:**
   - Click "New Project"
   - Name: `shay-compass`
   - Database password: Choose a strong password
   - Region: Choose closest to you
   - Click "Create new project"

3. **Get connection string:**
   - Go to Project Settings → Database
   - Under "Connection string" section
   - Select "URI" tab
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with your actual password

4. **Update `.env.local`:**
   ```env
   DATABASE_URI=your-supabase-connection-string
   ```

### Advantages:
- ✅ Free tier (2 projects, 500 MB database)
- ✅ Additional features (auth, storage, real-time)
- ✅ Good for production
- ✅ Database browser UI

---

## Option 3: Railway (Simple & Fast)

Railway offers simple PostgreSQL hosting with a straightforward setup.

### Setup Steps:

1. **Sign up:**
   - Go to [https://railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create database:**
   - Click "New Project"
   - Select "Provision PostgreSQL"
   - Railway will automatically create a database

3. **Get connection string:**
   - Click on the PostgreSQL service
   - Go to "Connect" tab
   - Copy the "Postgres Connection URL"

4. **Update `.env.local`:**
   ```env
   DATABASE_URI=your-railway-connection-string
   ```

### Advantages:
- ✅ Very simple setup
- ✅ Free tier ($5 credit/month)
- ✅ Great developer experience
- ✅ Built-in monitoring

---

## Option 4: Local PostgreSQL Installation (Advanced)

If you prefer running PostgreSQL locally without Docker:

### On macOS (using Homebrew):
```bash
brew install postgresql@16
brew services start postgresql@16
createdb shay_compass
```

Connection string:
```env
DATABASE_URI=postgresql://YOUR_USERNAME@localhost:5432/shay_compass
```

### On Windows (using installer):
1. Download from [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
2. Run installer and follow prompts
3. Note the password you set
4. Create database using pgAdmin or command line

### On Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo -u postgres createdb shay_compass
sudo -u postgres createuser YOUR_USERNAME
```

---

## Recommended Setup for Your Case

Since you don't have Docker and want the simplest setup:

### For Local Development + Production:
**Use Neon** - Set up once, use everywhere

1. Create a Neon account (free)
2. Create a project named `shay-compass-dev`
3. Copy the connection string to `.env.local`
4. Use the same database for local development
5. For production, create a separate project: `shay-compass-prod`

### Workflow:

**Development:**
```env
# .env.local
DATABASE_URI=postgresql://user:pass@ep-xxx.neon.tech/shay_compass_dev?sslmode=require
PAYLOAD_SECRET=dev-secret-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Production (Netlify environment variables):**
```env
DATABASE_URI=postgresql://user:pass@ep-yyy.neon.tech/shay_compass_prod?sslmode=require
PAYLOAD_SECRET=<generate-random-secret>
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
```

---

## Next Steps

After setting up your database:

1. **Test the connection:**
   ```bash
   yarn dev
   ```

2. **Access admin panel:**
   - Open [http://localhost:3000/admin](http://localhost:3000/admin)
   - Create your first admin user

3. **Add your first project:**
   - Login to admin panel
   - Go to "Media" → Upload images
   - Go to "Projects" → Create new project
   - Fill in all fields and save

4. **Verify frontend:**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Your project should appear on the homepage

---

## Troubleshooting

### "Failed to connect to database"
- ✅ Check your connection string is correct
- ✅ Ensure `DATABASE_URI` is set in `.env.local`
- ✅ Restart the dev server after changing `.env.local`

### "SSL/TLS connection error"
- ✅ Ensure connection string includes `?sslmode=require` for cloud providers
- ✅ For Neon/Supabase, SSL is required

### "Permission denied"
- ✅ Check database user has proper permissions
- ✅ Verify password is correct in connection string

---

## Cost Comparison

| Provider | Free Tier | Best For |
|----------|-----------|----------|
| **Neon** | ✅ 1 project, 10 GB | Development & Production |
| **Supabase** | ✅ 2 projects, 500 MB | If you need auth/storage too |
| **Railway** | ✅ $5/month credit | Simple setup |
| **Local Install** | ✅ Unlimited | Full control, more setup |

## My Recommendation

**Go with Neon** - It's the easiest option that works great for both development and production on Netlify, requires no local installation, and the free tier is generous.
