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
            'name.string' => 'error1',
            'name.required' => 'error8',
            'name.max' => 'error2',
            'name.unique' => 'Name shall be unique',
            'email.email' => 'error4',
            'email.max' => 'error5',
            'email.unique' => 'Email must be unique',
            'email.ascii' => 'error7'
        ];
    }
}
