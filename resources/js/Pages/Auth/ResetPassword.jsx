import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/Atoms/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';
import { FormField } from '@/Components/FormField';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form style={{ width: "300px" }} onSubmit={submit}>
                <FormField
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    errorMessage={errors.email}
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    handleChange={onHandleChange}
                />

                <FormField
                    id="password"
                    type="password"
                    name="password"
                    label="Hasło"
                    errorMessage={errors.password}
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    handleChange={onHandleChange}
                />

                <FormField
                    type="password"
                    name="password_confirmation"
                    label="Potwierdź hasło"
                    errorMessage={errors.password_confirmation}
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    handleChange={onHandleChange}
                />


                <div className="flex items-center justify-center mt-4">
                    <PrimaryButton className="ml-4" processing={processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
