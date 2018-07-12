# Committee-template

## Problem
- takes too much time to build one every year
- Style varies over the different sites.

## Proposal by Tim
This is a solution adapted from the proposal by [Tim van der Lippe](https://github.com/TimvdLippe).  
He proposed a solution where we have a core development team that implementes custom elements that can be used by committees. His full analysis and vision can be found [here](https://github.com/WISVCH/committee-website-vision/blob/master/README.md)  

## Changed
This is a very good analysis and there is indeed a lot that can be improved in the committee websites. Tim proposed to create a core development team that maintain the template and create it. We think this may not be necessary. Creating the elements this summer might be sufficient for now.
It needs to be generic for every committee. Therefore our first idea was to create just a simple `index.html` and `style.css` file. But we don't think that this is sufficient. 

## Tip
All suggestions are welcome! We made a initial version of the idea. Of course this is not final and we are happy to hear your opinion.

## Goal
Summarized: 
- Very generic template on which the commmittees can build. 
- Easy and simple to use. 
- Lot of flexability. 
- No special dependencies.

### Provide
So what should we provide?
- Fonts
- Colors
- Navigation bar
- Footer
- Different html files that all load a different page
- General style of displaying the committee.

### Custom Elements
We are now working on a version that uses custom Elements. This is in line with what [Tim van der Lippe](https://github.com/TimvdLippe). **One problem that we need to solve here is the customizability.**

### Bootstrap
We tried a version with bootstrap. But this ended up in more like a black box where your style is coming from. This also meant less customizability. Therefore we ommitted this version.

### Other options
- We could setup an repo for every committee inside the [WISVCH organisation](https://github.com/WISVCH)  
(Then all sites can be edited by members of CH that may have more knowledge then the committee member from the committee itself. )

