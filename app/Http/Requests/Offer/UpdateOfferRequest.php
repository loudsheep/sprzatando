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
            'categories' => ['array', 'required', 'min:1'],
            'photos' => ['array'],
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
            'price.numeric' => 'Cena musi być liczbą',
            'description.required' => 'Opis wymagany',
            'description.min' => 'Minimum 50 znaków',
            'selectedDate.after_or_equal' => 'Data przynajmniej na jutro ',
            'photos.*.image' => 'Zły format pliku',
            'photos.*.mimes' => 'Image format must be peg,png,bmp,gif',
            'photos.*.max' => 'Image above 5MB',
            // TODO: add more error messages in polish
        ];
    }
}
