DROP INDEX IF EXISTS "credits_email_unique";--> statement-breakpoint
ALTER TABLE `credits` ALTER COLUMN "email" TO "email" text(42) NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `credits_email_unique` ON `credits` (`email`);