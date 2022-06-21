<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return inertia('Home', [
            'mahasiswa' => [
                ['username' => 'Nada', 'age' => 22],
                ['username' => 'Dono Pradanas', 'age' => 22],
                ['username' => 'Dono Pradanas', 'age' => 22],
            ]
        ]);
    }
}
