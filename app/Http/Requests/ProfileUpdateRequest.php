<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:30', Rule::unique(User::class)->ignore($this->user()->id)],
            'email' => ['required', 'ascii', 'string', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        // TODO: change to proper messages
        return [
            'name.string' => 'Niedozwolone znaki',
            'name.required' => 'Nazwa wymagana',
            'name.max' => 'Przekroczono ilość znaków',
            'name.unique' => 'Nazwa jest już używana',
            'email.email' => 'Zły format email',
            'email.max' => 'Za duża ilość znaków',
            'email.unique' => 'Email jest już używany',
            'email.ascii' => 'Niedozwolone znaki specjalne',
        ];
    }
}
