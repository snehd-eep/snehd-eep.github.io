import 'dart:html';

import 'package:flutter/material.dart';
import 'package:portfolio/sections/homescreen.dart';
import 'animation/entranceFader.dart';
import 'sections/aboutscreen.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Color textColor = Colors.white;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Scaffold(
        backgroundColor: Colors.black,
        appBar: AppBar(
          elevation: 5.0,
          backgroundColor: Colors.transparent,
          title: EntranceFader(
            offset: Offset(0, -20),
            delay: Duration(seconds: 1),
            duration: Duration(seconds: 1),
            child: Text(
              '</ Portfolio >',
              style: TextStyle(color: Colors.white),
            ),
          ),
          actions: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: MaterialButton(
                onPressed: () {
                  print('button Pressed');
                },
                hoverColor: Colors.red,
                child: Text(
                  'Home',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: MaterialButton(
                onPressed: () {
                  print('button Pressed');
                },
                hoverColor: Colors.red,
                child: Text(
                  'About',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: MaterialButton(
                onPressed: () {
                  print('button Pressed');
                },
                hoverColor: Colors.red,
                child: Text(
                  'Projects',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: MaterialButton(
                onPressed: () {
                  print('button Pressed');
                },
                hoverColor: Colors.red,
                child: Text(
                  'Contacts',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: MaterialButton(
                onPressed: () {
                  print('button Pressed');
                },
                hoverColor: Colors.red,
                color: Color(0xFFFF5F1F),
                child: Text(
                  'Resume',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
            SizedBox(
              width: 20,
            )
          ],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Homescreen(),
              SizedBox(
                height: 5,
                child: Container(
                  width: double.infinity,
                  color: Colors.white,
                ),
              ),
              Aboutscreen(),
            ],
          ),
        ));
  }
}
