<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(Request $req)
    {
        $http = new \GuzzleHttp\Client();

        try {
            $response = $http->post(env('APP_URL') . '/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => '2',
                    'client_secret' => env('PASSPORT_GRANT'),
                    'username' => request('email'),
                    'password' => request('password'),
                ]
            ]);

            Auth::attempt([
                'email' => request('email'),
                'password' => request('password')
            ]);

            return $response->getBody();
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            if ($e->getCode() === 400)
                return response()->json(['error' => 'No username or password'], $e->getCode());
            else if ($e->getCode() === 401)
                return response()->json(['error' => 'Incorrect credentials'], $e->getCode());

            return response()->json(['error' => 'Something went wrong'], $e->getCode());
        }


    }

    public function register(Request $req)
    {

        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        return User::create([
            'email' => request('email'),
            'password' => request('password')
        ]);

    }

    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out', 200);
    }

}
