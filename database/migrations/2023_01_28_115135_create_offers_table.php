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
            $table->foreignId('user_id');
            $table->string('city');
            $table->string('zip_code', 10);
            $table->integer('hourly_rate');
            $table->string('category');
            $table->text('description');
            $table->dateTime('created');
            $table->dateTime('ends');
            $table->string('image')->nullable();
            $table->boolean('is_done');
            $table->boolean('is_banned');
            $table->boolean('is_reported');

            $table->index('user_id');

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
