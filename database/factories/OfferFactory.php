<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Offer>
 */
class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'city' => fake()->city(),
            'zip_code' => fake()->postcode(),
            'price' => fake()->numberBetween(50, 300),
            'title' => fake()->words(3, true),
            'category' => fake()->words(2, true),
            'description' => fake()->text(200),
            'ends' => fake()->dateTimeBetween('+2 days', '+20 days'),
        ];
    }
}
