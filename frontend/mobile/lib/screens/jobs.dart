// Jobs Screen
import 'package:flutter/material.dart';

class JobsScreen extends StatelessWidget {
  const JobsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Jobs')),
      body: Center(child: Text('Job Listings')),
    );
  }
}
