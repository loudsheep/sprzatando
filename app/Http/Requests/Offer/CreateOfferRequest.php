<?php

namespace App\Http\Requests\Offer;

use Illuminate\Foundation\Http\FormRequest;

class CreateOfferRequest extends FormRequest
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
            'title' => ['required', 'min:2', 'max:100', 'string'],
            'description' => ['required', 'min:50', 'max:500', 'string'],
            'selectedDate' => ['date', 'after_or_equal:now'],
            'city' => ['required', 'min:2', 'max:50', 'string'],
            'price' => ['numeric', 'min:1', 'max:2137'],
            'photos.*' => ['image', 'mimes:jpeg,png,bmp,gif', 'max:5120'],
            'photos' => ['array', 'max:5'],
            'categories' => ['array', 'required', 'min:1']
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
            'title.required' => 'Tytuł wymagany',
            'title.min' => 'Minimum :min znaki',
            'title.max' => 'Maksymalnie :max znaków',
            'title.string' => 'Niedozwolone znaki',
            'description.string' => 'Niedozwolone znaki',
            'description.required' => 'Opis wymagany',
            'description.min' => 'Minimum :min znaków',
            'description.max' => 'Maksymalnie :max znaków',
            'selectedDate.after_or_equal' => 'Data musi być ustawiona przynajmniej na jutro',
            'selectedDate.date' => 'Zły format daty',
            'city.required' => 'Miasto jest wymagane',
            'city.min' => 'Minimum :min znaki',
            'city.max' => 'Maksymalnie :max znaków',
            'city.string' => 'Niedozwolone znaki',
            'price.numeric' => 'Cena musi być liczbą',
            'price.min' => 'Cena musi być conajmniej :min',
            'price.max' => 'Cena nie może być większa niż :max',
            'photos.*.image' => 'Zły format pliku',
            'photos.*.mimes' => 'Wymagany format pliku: jpeg, png, bmp, gif',
            'photos.*.max' => 'Plik nie może przekraczać 5MB',
            'photos.max' => 'Ilość zdjęć nie może przekraczać :max',
            'categories.required' => 'Conajmniej jedna kategoria jest wymagana',
            'categories.min' => 'Conajmniej jedna kategoria jest wymagana',
            'categories.array' => 'Categorie muszą być w formie tablicy',
        ];
    }
}
