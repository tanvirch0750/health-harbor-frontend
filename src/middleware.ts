import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
const hybridRoutes = ['/', '/login', '/register']; //protected user cant visit this route
const patientAccesibleRoutes = [
  '/dashboard',
  '/my-profile',
  '/my-appointments',
];
const rolesRedirect: Record<string, unknown> = {
  doctor: 'http://localhost:3000/doctors/dashboard',
  patient: 'http://localhost:3000/dashboard',
  admin: 'http://localhost:3000/admins/dashboard',
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  // console.log(token, "token middleware")
  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect('http://localhost:3000/login');
  }

  const role = token?.role as string;
  // console.log(role, "role middleware")
  if (
    (role === 'admin' && pathname.startsWith('/admins')) ||
    (role === 'doctor' && pathname.startsWith('/doctors')) ||
    (role === 'patient' && patientAccesibleRoutes.includes(pathname))
  ) {
    // console.log("next")
    return NextResponse.next();
  }

  if (pathname === '/' && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect('http://localhost:3000');
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //hybrid routes
    '/',
    '/login',
    '/register',
    //patient routes
    '/dashboard',
    '/my-profile',
    '/my-appointments',
    //doctor routes
    '/doctors/:page*',
    //admin routes
    '/admins/:page*',
  ],
};

/**
 * next auth amader ekta next-auth.session-token provide kore -
 * amader backend amader arekta accessToken
 * tahole project er modhe 2 ta token parallel
 * next auth er token ta amadedr login ta dhore rakhe
 * next auth behaviour hocche eta apni jokhoni reload marben next-auth token ta refresh kore
 * amader backend er accessToken ta ache sheta kintu refresh hocche na
 * tar mane auth token reload marle refresh holeo, accesstoken refresh. ebong accessToken amadxer login persist kortese
 * tar mane emon ekta time ashbe jokhon amader next auth er token refresh hoye valid hoye jabe but accessToken expire hoye jabe
 * tokhon amader site loggedIn thakbe but data ashbe na
 *
 * so amader strategy hobe:
 * 1. amra check korbo accessToken expire hoye geche kina
 * 2. jodi hoye jay tahole notun kore refresh token generate kore amader access token ta update korte hobe jaate user logged in thakleo data jate ashte pare
 */
