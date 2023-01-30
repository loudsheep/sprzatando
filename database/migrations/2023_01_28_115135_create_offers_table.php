<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            // creator id
            $table->foreignId('creator_id');
            $table->string('city');
            $table->string('zip_code', 10);
            $table->integer('price');
            $table->string('title');
            $table->text('description');
            $table->string('category');
            $table->dateTime('ends');
            $table->string('main_image')->nullable();
            $table->boolean('is_done')->default(false);
            $table->boolean('is_banned')->default(false);
            $table->boolean('is_reported')->default(false);
            $table->unsignedBigInteger('contractor_id')->nullable();

            $table->index('creator_id');
            $table->index('contractor_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers');
    }
};
