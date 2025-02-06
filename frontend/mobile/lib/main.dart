import 'package:flutter/material.dart';
// import 'package:Neuro_Assist/frontend/mobile/lib/screens/home_screen.dart';
// import 'package:neuro_assist/screens/login_screen.dart';
// import 'package:neuro_assist/screens/register_screen.dart';
// import 'package:neuro_assist/screens/learning_screen.dart';
// import 'package:neuro_assist/screens/jobs_screen.dart';

import 'screens/Register.dart';
import 'screens/home.dart';
import 'screens/jobs.dart';
import 'screens/learning.dart';
import 'screens/login.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Neuro-Assist',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/login',
      routes: {
        '/login': (context) => const LoginScreen(),
        '/register': (context) => const RegisterScreen(),
        '/home': (context) => const HomeScreen(),
        '/learning': (context) => const LearningScreen(),
        '/jobs': (context) => const JobsScreen(),
      },
    );
  }
}
