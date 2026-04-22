import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  console.log('🔄 Adding has_sold column to projects...')

  await db.execute(sql`
    ALTER TABLE "projects"
    ADD COLUMN IF NOT EXISTS "has_sold" boolean NOT NULL DEFAULT false
  `)

  console.log('✅ has_sold column added')
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  console.log('🔄 Dropping has_sold column from projects...')

  await db.execute(sql`
    ALTER TABLE "projects"
    DROP COLUMN IF EXISTS "has_sold"
  `)

  console.log('✅ has_sold column dropped')
}
