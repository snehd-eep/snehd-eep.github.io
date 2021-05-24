import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/constants.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Aboutscreen extends StatefulWidget {
  @override
  _AboutscreenState createState() => _AboutscreenState();
}

class _AboutscreenState extends State<Aboutscreen> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      padding: EdgeInsets.symmetric(horizontal: size.width / 10),
      child: Container(
        width: size.width,
        constraints: BoxConstraints(maxHeight: size.height),
        padding: EdgeInsets.only(top: size.height / 4),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'About \nMy Story',
                  style: GoogleFonts.pattaya(
                      color: Colors.white, fontSize: size.width / 30),
                ),
                SizedBox(
                  height: 20,
                ),
                Text('Snehdeep',
                    textAlign: TextAlign.start,
                    style: GoogleFonts.monsieurLaDoulaise(
                        color: Colors.white, fontSize: 30))
              ],
            ),
            SizedBox(
              width: 20,
            ),
            Expanded(
              child: Padding(
                padding: EdgeInsets.symmetric(
                    horizontal: size.width / 45, vertical: 10),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Text(
                      '" ' + kaboutme + ' "',
                      style: GoogleFonts.stintUltraCondensed(
                          color: Colors.white, fontSize: size.width / 45),
                    ),
                    Spacer(
                      flex: 2,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SvgPicture.asset(
                          'assets/svgs/experience.svg',
                          width: 50,
                        ),
                        SizedBox(
                          width: 20,
                        ),
                        SvgPicture.asset('assets/svgs/illustrator.svg',
                            width: 50),
                        SizedBox(
                          width: 20,
                        ),
                        SvgPicture.asset('assets/svgs/python.svg', width: 50),
                        SizedBox(
                          width: 20,
                        ),
                        SvgPicture.asset('assets/svgs/android.svg', width: 50),
                        SizedBox(
                          width: 20,
                        ),
                      ],
                    ),
                    Spacer(
                      flex: 8,
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
