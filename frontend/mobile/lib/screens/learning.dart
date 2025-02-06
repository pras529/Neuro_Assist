// Learning Screen
import 'package:flutter/material.dart';

class LearningScreen extends StatelessWidget {
  const LearningScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Learning')),
      body: Center(child: Text('Learning Resources')),
    );
  }
}