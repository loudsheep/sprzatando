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
        Schema::create('intrested_in_offer', function (Blueprint $table) {
            $table->id();
            $table->foreignId('offer_id');
            $table->foreignId('intrested_user_id');

            $table->index('offer_id');
            $table->index('intrested_user_id');

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
        Schema::dropIfExists('intrested_in_offer');
    }
};
