CREATE TABLE `credits` (
	`credit_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text(36) NOT NULL,
	`credit_type` text NOT NULL,
	`email` text(42),
	`expiration_date` text NOT NULL,
	`is_expirable` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `credits_email_unique` ON `credits` (`email`);