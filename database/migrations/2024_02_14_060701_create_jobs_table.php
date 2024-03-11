<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->unsignedBigInteger('dispatcher_id');
            $table->enum('dispatcher_status', ['test', 'test2']);
            $table->unsignedBigInteger('executor_id');
            $table->enum('executor_status', ['contact', 'not selected', 'selected', 'invited', 'assigned', 'accepted assignment']);
            $table->enum('assignment_parameters', ['not installed', '?']);
            $table->enum('execution_parameters', ['not provided', '?']);
            $table->enum('selecting_executors', ['select', 'manually', 'causation', 'on creation']);
            $table->enum('invitation_executors', ['select', 'manually', 'causation', 'on select']);
            $table->enum('assign_executors', ['select', 'manually', 'causation', 'on select', 'on activation']);
            $table->enum('activation', ['select', 'manually', 'causation', 'destination parameters exists']);
            $table->enum('completion', ['select', 'manually', 'causation', 'message of execution exists']);
            $table->unsignedBigInteger('status_id');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
