CREATE TABLE "chat_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_message" text NOT NULL,
	"assistant_response" text NOT NULL,
	"full_history" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
