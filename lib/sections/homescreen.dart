import 'package:flutter/material.dart';

import 'package:portfolio/animation/entranceFader.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Homescreen extends StatefulWidget {
  @override
  _HomescreenState createState() => _HomescreenState();
}

class _HomescreenState extends State<Homescreen> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      width: size.width,
      constraints: BoxConstraints(maxHeight: size.height * 0.95),
      color: Colors.transparent,
      child: Stack(
        children: [
          Positioned(
            bottom: 0,
            right: 0,
            child: SvgPicture.asset(
              'assets/svgs/1.svg',
              width: size.width / 3,
              height: size.height / 2,
            ),
          ),
          Positioned(
            top: 10,
            left: 0,
            child: SvgPicture.asset(
              'assets/svgs/2.svg',
              width: size.width / 3,
              height: size.height / 2,
            ),
          ),
          Positioned(bottom: 100, right: 10, child: socialslist()),
          Positioned(
            left: size.width / 5,
            top: size.height / 4,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Hi, I am ',
                    style: GoogleFonts.montserrat(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        fontSize: 40)),
                SizedBox(
                  height: 10,
                ),
                Container(
                    padding: EdgeInsets.all(5),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(5),
                        color: Colors.white),
                    child: Text('Snehdeep',
                        style: GoogleFonts.montserrat(
                            color: Colors.black,
                            fontWeight: FontWeight.bold,
                            fontSize: 40))),
              ],
            ),
          ),
        ],
      ),
    );
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
