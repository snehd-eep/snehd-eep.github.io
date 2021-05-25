import 'dart:html';

import 'package:flutter/material.dart';

import 'package:portfolio/sections/homescreen.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';
import 'animation/entranceFader.dart';
import 'sections/aboutscreen.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  Color textColor = Colors.white;

  ScrollController _scrollController =
      ScrollController(initialScrollOffset: 25.0);
  ItemScrollController _itemScrollController = ItemScrollController();
  ItemPositionsListener _itemPositionsListener = ItemPositionsListener.create();

  final List<String> _sectionsName = ["Home", "About", "Projects", "Contact"];

  void _scroll(int i) {
    _itemScrollController.scrollTo(index: i, duration: Duration(seconds: 1));
  }

  Widget sectionWidget(int i) {
    if (i == 0) {
      return Homescreen();
    } else if (i == 1) {
      return Aboutscreen();
    } else if (i == 2) {
      return Container();
    } else if (i == 3) {
      return Container();
    }
  }

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
                  _scroll(0);
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
                  _scroll(1);
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
                  _scroll(2);
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
                  _scroll(3);
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
        body: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: RawScrollbar(
            controller: _scrollController,
            thumbColor: Color(0xFFFF5F1F),
            thickness: 5.0,
            child: ScrollablePositionedList.builder(
                itemScrollController: _itemScrollController,
                itemPositionsListener: _itemPositionsListener,
                itemCount: 4,
                itemBuilder: (context, index) {
                  return sectionWidget(index);
                }),
          ),
        ));
  }
}
