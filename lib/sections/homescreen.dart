import 'package:flutter/material.dart';

import 'package:portfolio/animation/entranceFader.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Homescreen extends StatefulWidget {
  @override
  _HomescreenState createState() => _HomescreenState();
}

class _HomescreenState extends State<Homescreen>
    with SingleTickerProviderStateMixin {
  Animation<double> animation;
  AnimationController controller;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller =
        AnimationController(vsync: this, duration: Duration(seconds: 2));
    animation = Tween<double>(begin: -10, end: 0).animate(controller)
      ..addListener(() {
        setState(() {});
      })
      ..addStatusListener((status) {
        if (status == AnimationStatus.completed) {
          controller.reverse();
        } else if (status == AnimationStatus.dismissed) {
          controller.forward();
        }
      });
    controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    Size size = MediaQuery.of(context).size;
    var other = 0.085;
    return Container(
      height: height,
      width: width,
      color: Colors.transparent,
      child: Stack(
        children: [
          Positioned(
            bottom: animation.value,
            right: animation.value,
            child: SvgPicture.asset(
              'assets/svgs/1.svg',
              height: width < 1200 ? height * 0.4 : height * 0.485,
            ),
          ),
          Positioned(
            top: 10 + animation.value,
            left: animation.value,
            child: SvgPicture.asset(
              'assets/svgs/2.svg',
              height: width < 1200 ? height * 0.35 : height * 0.415,
            ),
          ),
          Positioned(bottom: 100, right: 10, child: socialslist()),
          Positioned(
            left: size.width / 5,
            top: size.height / 5,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Hi, I am ',
                    style: GoogleFonts.montserrat(
                        color: Colors.white,
                        fontSize:
                            width < 1200 ? height * 0.055 : height * 0.065)),
                SizedBox(
                  height: height * 0.04,
                ),
                Container(
                    padding: EdgeInsets.all(8),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(5),
                        border: Border.all(color: Colors.white, width: 5)),
                    child: Text(' Snehdeep ',
                        style: GoogleFonts.montserrat(
                          color: Colors.white,
                          fontWeight: FontWeight.w400,
                          fontSize:
                              width < 1200 ? height * 0.085 : height * 0.095,
                        ))),
              ],
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}

Column socialslist() {
  return Column(
    children: [
      EntranceFader(
        delay: Duration(milliseconds: 1000),
        duration: Duration(milliseconds: 1000),
        offset: Offset(10, 0),
        child: IconButton(
          icon: Icon(
            FontAwesomeIcons.instagram,
            color: Colors.white,
          ),
          onPressed: () {},
          hoverColor: Colors.blue,
        ),
      ),
      EntranceFader(
        delay: Duration(milliseconds: 1200),
        duration: Duration(milliseconds: 1000),
        offset: Offset(10, 0),
        child: IconButton(
          icon: Icon(
            FontAwesomeIcons.facebook,
            color: Colors.white,
          ),
          onPressed: () {},
          hoverColor: Colors.red,
        ),
      ),
      EntranceFader(
        delay: Duration(milliseconds: 1400),
        duration: Duration(milliseconds: 1000),
        offset: Offset(10, 0),
        child: IconButton(
          icon: const Icon(
            FontAwesomeIcons.github,
            color: Colors.white,
          ),
          onPressed: () {},
          hoverColor: Colors.red,
        ),
      ),
      EntranceFader(
        delay: Duration(milliseconds: 1600),
        duration: Duration(milliseconds: 1000),
        offset: Offset(10, 0),
        child: IconButton(
          icon: Icon(
            FontAwesomeIcons.linkedin,
            color: Colors.white,
          ),
          onPressed: () {},
          hoverColor: Colors.white,
          highlightColor: Colors.pink,
        ),
      )
    ],
  );
}
