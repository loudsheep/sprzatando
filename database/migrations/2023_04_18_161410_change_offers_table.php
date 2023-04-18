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
        Schema::table('offers', function (Blueprint $table) {
            $table->dropColumn('zip_code');
            $table->dropColumn('is_done');
            $table->dropColumn('is_reported');

            $table->timestamp('done_at')->nullable()->after('main_image');
            $table->enum('reported', ['not_reported', 'reported', 'checked'])->default('not_reported')->after('is_banned');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('offers', function (Blueprint $table) {
            $table->string('zip_code', 10)->after('city');
            $table->boolean('is_done')->default(false)->after('main_image');
            $table->boolean('is_reported')->default(false)->after('is_banned');

            $table->dropColumn('done_at');
            $table->dropColumn('reported');
        });
    }
};
