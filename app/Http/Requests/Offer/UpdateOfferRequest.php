<?php

namespace App\Http\Requests\Offer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOfferRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => ['required', 'min:2', 'max:50', 'string'],
            'description' => ['required', 'min:50', 'max:500', 'string'],
            'city' => ['required', 'min:2', 'max:50', 'string'],
            'price' => ['required', 'numeric', 'min:1', 'max:2137'],
            'photos.*' => ['max:5120'],
            'photos' => ['array', 'max:5'],
            'categories' => ['array', 'required', 'min:1'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required'=> 'Tytuł wymagany',
            'title.min'=> 'Minimum :min znaki',
            'title.max'=> 'Maksymalnie :max znaków',
            'title.string'=> 'Niedozwolone znaki',
            'description.required' => 'Opis wymagany',
            'description.min' => 'Minimum :min znaków',
            'description.max' => 'Maksymalnie :max znaków',
            'description.string'=> 'Niedozwolone znaki',
            'city.required' => 'Miasto jest wymagane',
            'city.min' => 'Minimum :min znaki',
            'city.max' => 'Maksymalnie :max znaków',
            'city.string' => 'Niedozwolone znaki',
            'price.numeric' => 'Cena musi być liczbą',
            'price.min' => 'Cena musi być conajmniej :min',
            'price.max' => 'Cena nie może być większa niż :max',
            'selectedDate.after_or_equal' => 'Data musi być ustawiona przynajmniej na jutro',
            'photos.*.image' => 'Zły format pliku',
            'photos.*.mimes' => 'Wymagany format pliku: jpeg,png,bmp,gif',
            'photos.*.size' => 'Plik nie może przekraczać 5MB',
            'photos.max' => 'Ilość zdjęć nie może przekraczać :max',
            'categories.required' => 'Conajmniej jedna kategoria jest wymagana',
            'categories.min' => 'Conajmniej jedna kategoria jest wymagana',
            'categories.array' => 'Categorie muszą być w formie tablicy',
        ];
    }
}
