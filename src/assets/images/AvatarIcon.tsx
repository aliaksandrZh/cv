export const AvatarIcon = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    viewBox="0 0 2048.000000 2048.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,2048.000000) scale(0.100000,-0.100000)"
      fill="var(--icon)"
      stroke="none"
    >
      <path
        d="M10032 18060 c-29 -6 -93 -26 -142 -45 -127 -49 -152 -54 -298 -65
-112 -9 -146 -7 -258 10 -164 25 -233 25 -391 -1 -137 -22 -211 -20 -266 7
l-32 15 25 -20 c31 -25 6 -29 -28 -5 -31 22 -37 13 -12 -19 l21 -26 -26 -7
c-15 -4 -72 -5 -128 -2 -84 3 -93 2 -54 -6 86 -17 49 -26 -105 -24 -223 2
-277 -13 -445 -123 -108 -70 -232 -128 -408 -189 -179 -62 -242 -92 -295 -138
-51 -43 -70 -80 -70 -132 0 -46 7 -62 57 -137 31 -45 34 -56 28 -93 -16 -92
-129 -179 -260 -200 l-60 -9 69 4 c38 3 67 3 65 1 -2 -2 -60 -20 -128 -40
-211 -63 -419 -187 -468 -280 l-15 -28 39 30 c34 28 142 82 161 82 4 0 -16
-14 -45 -30 -69 -39 -117 -89 -149 -153 l-27 -52 55 53 c50 49 109 92 125 92
3 0 -12 -13 -34 -29 -46 -33 -89 -85 -160 -191 -123 -182 -162 -330 -113 -425
18 -36 20 -37 20 -13 0 47 67 108 148 133 20 6 17 0 -17 -34 -63 -63 -86 -149
-86 -326 0 -173 12 -232 111 -544 42 -133 84 -289 97 -358 12 -68 25 -123 29
-123 8 0 51 69 58 95 4 14 10 1 18 -38 6 -32 26 -86 44 -119 31 -59 165 -214
176 -203 3 2 -2 13 -10 22 -18 20 -78 136 -78 149 0 5 19 -22 42 -60 61 -103
263 -307 288 -291 15 9 30 -22 99 -201 116 -300 150 -421 156 -549 3 -60 9
-166 14 -235 5 -69 8 -126 6 -128 -1 -2 -23 2 -48 9 -95 23 -138 -30 -145
-180 -8 -167 44 -424 147 -721 82 -238 118 -370 126 -455 13 -152 41 -257 111
-415 18 -41 42 -118 54 -170 105 -471 216 -810 331 -1012 62 -108 130 -197
274 -358 276 -309 375 -430 375 -459 0 -49 30 -460 45 -616 8 -82 15 -158 15
-167 0 -17 -136 -190 -464 -592 -94 -115 -176 -214 -182 -222 -6 -7 -98 -44
-205 -82 -107 -38 -333 -122 -504 -187 -635 -240 -864 -310 -1285 -389 -74
-15 -178 -37 -230 -51 -179 -48 -359 -152 -427 -247 -37 -52 -203 -382 -263
-523 -165 -390 -261 -772 -331 -1328 l-21 -168 120 -242 c219 -441 457 -814
761 -1192 445 -553 909 -975 1496 -1361 236 -155 378 -235 660 -374 252 -124
423 -195 668 -279 996 -339 2173 -412 3172 -195 1609 348 3028 1367 3944 2832
292 467 502 919 679 1462 55 169 132 444 132 469 -1 11 -107 68 -327 176 -495
243 -2144 1077 -2179 1102 -26 19 -35 37 -54 105 -148 556 -234 811 -319 941
-107 163 -229 280 -605 577 -115 91 -279 221 -365 290 l-156 126 3 114 c10
413 36 1101 67 1740 4 69 15 181 25 250 10 69 22 159 26 200 l7 75 15 -35 c41
-101 93 -134 212 -134 136 0 289 64 392 164 53 52 57 58 63 115 3 33 11 69 17
80 120 213 156 349 182 683 25 320 28 422 16 549 -22 242 -82 377 -192 434
-51 26 -148 25 -207 -1 -24 -11 -45 -19 -47 -17 -14 14 -26 431 -22 785 4 346
8 436 24 527 13 76 20 102 25 85 l6 -25 8 28 c11 42 -1 292 -18 367 -27 116
-27 126 -2 52 13 -39 29 -100 35 -135 15 -94 12 -297 -6 -383 -8 -42 -14 -78
-12 -80 8 -8 82 198 108 301 86 341 50 713 -101 1034 -92 196 -272 431 -389
509 -110 74 -294 136 -475 161 -43 6 -80 13 -81 14 -2 2 -5 84 -8 183 -3 154
-7 192 -30 273 -52 186 -161 357 -333 522 -196 187 -415 304 -710 378 -143 36
-281 55 -338 47 -26 -3 -82 3 -141 15 -113 23 -378 34 -462 19z m303 -19 l50
-7 -60 -8 c-130 -15 -206 -26 -335 -45 -74 -12 -153 -21 -175 -20 -35 0 -27 5
64 35 57 19 127 38 155 43 63 11 234 12 301 2z m-195 -1911 c151 -23 340 -52
419 -66 96 -17 147 -22 154 -15 7 7 3 8 -12 4 -13 -3 -21 -1 -21 7 0 13 15 12
216 -26 145 -27 289 -69 388 -114 75 -33 199 -115 238 -156 57 -62 114 -214
119 -319 1 -22 3 -25 6 -8 3 17 9 21 31 17 26 -5 26 -5 7 10 -20 15 -20 15 1
10 16 -4 23 -19 34 -72 17 -92 53 -201 57 -180 4 17 7 17 41 -1 45 -23 146
-127 137 -141 -4 -6 -1 -9 5 -8 15 4 103 -120 95 -132 -3 -5 -17 -2 -32 5 -21
11 -29 12 -35 2 -12 -19 -40 -14 -82 16 -39 27 -76 36 -76 17 0 -5 4 -10 9
-10 18 0 151 -133 187 -188 146 -219 286 -802 390 -1621 30 -239 38 -280 61
-323 44 -81 47 -80 93 17 22 48 48 94 57 102 10 8 12 11 5 8 -21 -11 5 34 35
63 13 12 21 27 18 32 -3 6 -1 10 4 10 6 0 10 3 9 8 -3 15 15 42 25 35 5 -3 7
-1 3 5 -8 13 73 112 140 170 116 103 266 137 352 79 75 -49 121 -150 147 -325
20 -132 19 -302 -5 -592 -21 -262 -30 -325 -61 -429 -21 -68 -108 -261 -118
-261 -3 0 -20 31 -37 68 -31 68 -31 69 -10 78 31 13 79 91 104 167 12 36 26
119 33 184 6 65 21 222 34 348 13 127 27 273 31 325 14 201 -35 338 -132 370
-71 24 -168 -33 -263 -153 -80 -99 -186 -315 -215 -436 -38 -155 -51 -284 -37
-363 18 -103 14 -136 -24 -212 -47 -92 -49 -163 -6 -207 40 -39 105 -41 150
-4 16 14 28 31 25 38 -2 7 7 24 22 40 23 25 29 27 77 21 29 -4 61 -11 72 -17
28 -16 65 -20 65 -7 0 5 -8 10 -17 11 -17 0 -17 1 -1 12 15 10 11 15 -32 44
-68 46 -94 96 -135 263 -41 166 -91 325 -110 353 -14 19 -12 33 12 111 12 39
17 45 25 32 13 -24 62 -46 102 -46 32 0 38 5 69 58 28 47 38 58 64 60 34 3 68
-29 102 -97 58 -113 104 -388 91 -542 -10 -115 -15 -136 -50 -214 -46 -103
-95 -146 -129 -112 -7 6 4 -13 23 -43 41 -62 76 -163 76 -219 0 -48 -28 -91
-90 -140 -138 -109 -343 -162 -440 -113 -83 41 -118 148 -101 305 5 50 13 142
16 202 3 61 8 129 11 153 3 23 2 42 -3 42 -4 0 -23 -123 -41 -272 -62 -507
-73 -582 -112 -763 -87 -406 -180 -726 -252 -870 -65 -129 -114 -184 -428
-489 -409 -396 -644 -601 -843 -734 -296 -199 -402 -236 -770 -267 -100 -9
-236 -23 -302 -31 -191 -23 -374 -29 -447 -15 -34 7 -99 31 -143 54 -123 64
-103 43 -1054 1145 -136 157 -212 283 -290 479 -76 191 -111 318 -277 1008
-26 105 -62 244 -81 310 -73 255 -73 258 -83 740 -5 242 -11 469 -15 505 -16
188 -24 444 -14 457 9 10 8 13 -5 13 -20 0 -21 24 -1 40 14 11 13 14 -1 25 -9
6 -15 18 -12 25 4 12 61 50 106 70 12 5 22 13 22 18 0 4 20 14 45 21 25 7 44
16 41 18 -2 3 -43 -9 -90 -26 -92 -32 -130 -50 -108 -51 7 0 10 -4 7 -10 -11
-17 -21 -11 -23 15 -3 38 31 56 168 90 30 8 88 14 129 15 41 0 72 3 68 6 -3 3
-36 6 -74 6 -65 1 -66 1 -23 8 25 5 74 4 110 -1 85 -11 93 -10 45 7 -24 8 -29
11 -12 8 15 -2 60 -9 100 -14 62 -8 159 -31 232 -55 11 -4 1 4 -21 18 -51 30
-202 85 -269 97 -55 10 -65 11 135 -10 42 -4 53 -8 30 -9 -32 -2 -33 -3 -12
-12 13 -5 33 -11 45 -13 53 -10 219 -91 290 -142 67 -49 58 -35 -15 23 -73 57
-151 99 -222 121 -28 8 -45 17 -38 19 16 6 117 -29 195 -68 31 -16 57 -26 57
-23 0 4 9 -1 20 -11 11 -10 20 -15 20 -12 0 13 -95 77 -107 72 -8 -2 -11 -1
-8 5 3 5 -3 14 -14 19 -36 20 -166 65 -221 77 -37 8 -46 13 -26 13 69 2 255
-77 366 -155 76 -53 131 -78 144 -63 8 9 8 10 0 6 -7 -4 -18 1 -25 10 -12 15
-12 16 1 8 8 -5 20 -10 25 -10 14 0 91 -42 140 -75 22 -14 58 -37 80 -50 40
-24 39 -23 -13 28 -30 29 -51 52 -47 52 4 0 1 8 -6 17 -8 10 1 5 19 -10 19
-15 38 -25 43 -21 5 3 8 0 7 -8 -2 -7 5 -13 14 -13 9 0 20 -4 25 -9 5 -5 2 -6
-7 -2 -8 4 -6 0 4 -8 13 -11 23 -12 31 -6 7 5 15 6 20 2 4 -4 4 4 0 18 l-8 24
29 -19 c24 -15 27 -16 15 -2 -7 9 -10 17 -5 17 5 0 21 -14 37 -32 19 -23 25
-27 21 -13 -5 17 -3 16 16 -5 17 -19 14 -11 -10 36 -17 34 -57 90 -88 125 -31
36 -70 80 -86 99 l-28 35 22 -40 c13 -22 45 -73 72 -113 54 -81 65 -109 17
-44 -38 52 -48 49 -17 -4 17 -30 18 -36 5 -25 -9 7 -17 19 -17 27 0 26 -127
141 -215 194 -50 30 -92 54 -95 53 -3 -1 -14 6 -25 16 -51 46 -43 27 10 -24
33 -31 47 -48 30 -38 -16 11 -48 30 -70 43 l-40 24 30 -32 c31 -33 41 -41 29
-20 -4 7 -3 8 5 4 6 -4 9 -11 6 -15 -2 -5 21 -29 53 -55 31 -25 80 -67 107
-92 54 -50 21 -26 -87 65 -199 165 -563 283 -748 240 -46 -10 -138 -53 -155
-71 -7 -8 -6 -9 3 -4 6 4 12 3 12 -1 0 -5 -24 -21 -54 -35 -56 -28 -131 -87
-121 -96 2 -3 0 -11 -6 -19 -8 -9 -1 -9 27 3 51 22 105 34 98 23 -3 -5 -9 -9
-14 -9 -10 0 -95 -54 -144 -91 l-28 -22 7 24 c4 13 14 32 23 42 16 18 3 24
-14 7 -10 -10 -33 255 -54 625 -12 209 -12 566 0 680 19 181 62 278 148 337
25 17 112 55 195 84 143 51 191 74 352 174 39 24 119 65 178 92 179 79 242
116 349 206 l102 85 280 38 c339 45 616 105 816 178 30 11 69 18 85 15 17 -2
154 -22 305 -44z m2149 -1450 c11 -24 11 -24 -3 -6 -9 11 -16 24 -16 30 0 12
5 7 19 -24z m-4114 -841 c79 -29 64 -32 -20 -4 -39 13 -62 24 -53 24 10 1 42
-8 73 -20z m-112 -31 c92 -19 40 -18 -69 2 -83 15 -93 19 -44 14 36 -3 87 -10
113 -16z m-140 -35 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z
m-433 -26 c0 -2 -12 -14 -27 -28 l-28 -24 24 28 c23 25 31 32 31 24z m433 -14
c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-468 -193 c-3 -5 -16
-10 -28 -9 -20 1 -20 2 3 9 14 4 26 8 28 9 2 1 0 -3 -3 -9z m-115 -501 c35
-11 38 -15 44 -56 11 -80 18 -679 8 -663 -12 18 -48 163 -61 240 l-9 55 -1
-48 c-1 -56 21 -169 54 -277 21 -67 43 -250 31 -250 -7 0 -111 320 -139 430
-54 207 -75 443 -47 515 25 64 49 75 120 54z m5490 -1082 c0 -2 -10 -12 -22
-23 l-23 -19 19 23 c18 21 26 27 26 19z m-5300 -443 c16 -59 28 -110 26 -112
-4 -4 -30 73 -44 133 -21 85 -23 100 -17 94 3 -4 19 -55 35 -115z m4605 -1668
c45 -45 44 -116 -5 -416 -28 -167 -28 -358 -1 -560 40 -303 44 -397 37 -795
-7 -408 -17 -585 -42 -735 -31 -188 -43 -217 -135 -336 -46 -60 -118 -144
-159 -188 -230 -241 -675 -484 -1220 -666 -498 -167 -710 -170 -1023 -16 -260
129 -520 355 -645 562 -78 130 -89 178 -117 494 -37 414 -53 579 -85 870 -42
378 -78 743 -89 905 -19 263 -22 325 -18 325 2 0 35 -37 73 -82 352 -415 425
-484 580 -540 81 -29 249 -35 419 -15 141 17 356 30 290 17 -38 -7 -37 -7 20
-9 98 -2 220 -26 390 -77 139 -42 174 -48 272 -52 168 -6 263 28 400 144 77
66 160 174 320 417 293 446 459 655 587 739 71 46 115 50 151 14z"
      />
      <path d="M10728 16033 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path
        d="M10960 14230 c-8 -4 -58 -13 -110 -19 -107 -12 -247 -49 -330 -88
-30 -14 -71 -26 -91 -28 -20 -1 -78 -22 -130 -47 -78 -37 -105 -56 -158 -114
-60 -63 -62 -62 -15 11 9 14 14 25 10 25 -6 0 -76 -106 -76 -116 0 -3 6 -2 13
2 7 4 9 3 4 -2 -5 -5 -13 -9 -19 -9 -14 0 -54 -73 -63 -116 -5 -19 -10 -29
-12 -23 -2 6 3 31 11 55 8 23 12 47 9 52 -4 6 -1 7 7 2 10 -6 12 -4 7 8 -3 9
10 41 34 79 22 35 29 51 16 35 -72 -85 -118 -204 -116 -302 1 -48 1 -49 11
-20 10 26 12 27 19 10 7 -20 7 -20 14 0 5 11 14 27 20 35 7 8 17 29 24 45 10
27 10 25 5 -20 l-5 -50 45 67 c45 65 85 108 50 52 l-18 -29 30 25 c16 14 23
18 17 10 -7 -8 -13 -19 -13 -24 0 -6 14 5 31 24 l30 35 -27 -44 c-16 -24 -30
-38 -32 -32 -4 13 -22 5 -22 -10 0 -6 5 -7 12 -3 8 5 9 1 5 -12 -4 -10 10 1
31 26 109 132 245 243 360 294 100 44 84 23 -27 -34 -104 -55 -215 -136 -253
-186 l-22 -29 31 29 c17 15 36 25 41 22 5 -3 16 2 23 11 12 14 12 16 0 8 -10
-5 -12 -4 -7 4 4 6 12 9 17 5 6 -3 18 1 27 9 18 15 76 47 89 48 5 1 7 6 5 13
-2 6 -1 8 3 4 4 -3 30 8 58 26 55 35 187 96 208 96 7 0 -32 -22 -87 -49 -54
-27 -108 -57 -119 -66 l-20 -17 20 6 c17 5 16 3 -5 -15 -21 -17 -22 -20 -5
-15 12 4 6 -4 -15 -21 -19 -15 -51 -43 -70 -62 -25 -23 -16 -19 30 16 36 26
84 58 107 71 53 29 126 54 118 42 -3 -6 -11 -10 -17 -10 -5 0 -22 -9 -38 -20
-15 -11 -29 -17 -32 -15 -2 3 -20 -9 -39 -26 l-34 -31 38 26 c20 15 37 24 37
21 0 -3 12 1 28 9 85 47 183 73 372 101 65 10 75 13 40 14 -39 0 -138 -15
-220 -34 l-25 -6 25 12 c46 20 220 49 298 49 107 0 223 -30 312 -81 116 -65
161 -97 208 -148 56 -59 43 -33 -28 57 -30 39 -68 78 -83 87 -16 9 -26 19 -24
22 11 10 115 -67 166 -123 66 -72 50 -37 -19 42 -28 32 -48 59 -45 62 7 7 -16
33 -25 27 -4 -2 -20 10 -36 28 l-29 32 30 -25 30 -25 -25 28 c-34 39 -170 124
-262 164 -136 59 -285 88 -328 63z m-470 -204 c0 -2 -30 -21 -66 -42 -37 -22
-99 -68 -138 -103 -42 -38 -55 -47 -31 -22 49 52 136 121 190 149 44 23 45 24
45 18z m255 -76 c-11 -5 -27 -9 -35 -9 -9 0 -8 4 5 9 11 5 27 9 35 9 9 0 8 -4
-5 -9z m850 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4
11 -10z m-1395 -144 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21
21 13z"
      />
      <path d="M10948 13963 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
      <path d="M10888 13953 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
      <path d="M10848 13943 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path
        d="M10764 13914 c-18 -14 -18 -14 6 -3 31 14 36 19 24 19 -6 0 -19 -7
-30 -16z"
      />
      <path
        d="M10425 13843 c-38 -36 -54 -55 -35 -42 19 13 38 29 42 34 4 6 11 10
15 10 16 1 55 27 49 32 -3 4 -1 12 5 20 6 7 8 13 3 13 -5 -1 -40 -31 -79 -67z"
      />
      <path
        d="M11640 13906 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21
-21 13z"
      />
      <path
        d="M11470 13896 c0 -3 9 -10 20 -16 11 -6 20 -8 20 -6 0 3 -9 10 -20 16
-11 6 -20 8 -20 6z"
      />
      <path
        d="M10395 13856 c-28 -19 -70 -56 -95 -82 l-45 -48 50 45 c28 25 71 59
98 77 40 28 55 42 44 42 -1 0 -25 -15 -52 -34z"
      />
      <path
        d="M9933 13858 c-5 -7 -15 -28 -23 -45 -7 -18 -16 -33 -20 -33 -12 0
-30 -120 -23 -152 8 -42 21 -24 29 40 5 42 9 52 15 37 7 -18 8 -18 9 5 1 14 5
34 10 45 5 12 7 -12 4 -60 -3 -79 -3 -79 6 -20 4 34 18 87 29 120 24 69 24 68
11 60 -5 -3 -10 0 -10 7 0 9 -3 9 -10 -2 -5 -8 -10 -19 -10 -25 0 -5 5 -3 10
5 14 21 12 8 -4 -30 -12 -30 -14 -31 -19 -10 -3 12 -2 33 3 46 10 26 8 31 -7
12z"
      />
      <path
        d="M8640 13692 c58 -55 107 -98 109 -96 7 7 -49 62 -134 131 -79 64 -79
64 25 -35z"
      />
      <path
        d="M10209 13683 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8
-17 -17z"
      />
      <path d="M7858 13643 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path
        d="M10642 13490 c-135 -19 -295 -71 -389 -125 -47 -28 -166 -142 -203
-196 -19 -27 -11 -22 36 21 211 198 423 275 759 275 146 0 168 -3 254 -28 107
-32 168 -61 294 -141 48 -30 85 -51 82 -46 -13 22 -174 134 -236 165 -119 61
-194 77 -374 80 -88 2 -188 0 -223 -5z"
      />
      <path
        d="M10585 13380 c-159 -29 -262 -86 -398 -220 -120 -118 -119 -123 43
-133 69 -4 187 -17 262 -28 195 -30 380 -24 493 15 82 28 206 98 239 135 27
30 36 26 33 -13 -1 -19 -5 -32 -8 -30 -3 2 -17 -8 -30 -23 -13 -14 -18 -23
-11 -19 8 5 21 1 33 -10 18 -16 19 -16 13 -1 -7 19 11 24 20 5 4 -9 5 -8 5 2
-1 8 -1 30 0 48 l1 32 58 -47 c31 -26 56 -49 55 -52 -1 -3 12 -6 28 -7 l30 -1
-23 16 c-13 9 -35 28 -50 42 l-27 26 55 -19 c31 -11 58 -17 60 -15 3 2 -20 16
-49 31 -30 14 -83 48 -119 75 -91 69 -231 146 -313 171 -55 18 -100 23 -210
26 -77 1 -162 -1 -190 -6z m142 -22 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4
-12 1 -19z m-124 -38 c3 8 8 22 10 30 3 9 6 5 6 -9 1 -18 5 -22 21 -18 32 8
54 -33 46 -87 -10 -65 7 -94 59 -102 55 -8 100 15 122 61 9 19 19 32 23 30 4
-2 5 7 2 20 -5 28 0 30 29 14 20 -10 20 -11 3 -37 -17 -26 -17 -26 1 -12 14
11 19 12 22 2 3 -6 9 -10 14 -6 34 21 -32 -83 -73 -116 -30 -23 -88 -44 -88
-31 0 5 -11 6 -24 4 -18 -4 -36 6 -70 37 -25 24 -46 49 -46 56 0 7 -6 17 -13
21 -7 4 -24 22 -38 40 -22 26 -26 41 -26 90 0 44 2 51 7 28 5 -20 9 -25 13
-15z m34 18 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m40 7 c0 -8
-4 -12 -9 -9 -5 3 -6 10 -3 15 9 13 12 11 12 -6z m-148 -47 c-21 -109 7 -207
74 -264 34 -28 31 -29 -98 -8 -55 9 -143 19 -195 23 l-95 6 -3 33 c-3 29 5 41
69 105 64 64 73 70 80 52 7 -20 8 -20 8 1 1 11 10 29 20 38 19 17 20 17 23
-21 l3 -38 14 41 c7 22 22 46 32 52 17 11 19 9 19 -20 l0 -33 21 42 c26 53 39
48 28 -9z m592 -85 c8 -11 14 -24 12 -30 -2 -6 3 -13 10 -16 11 -4 14 1 11 16
-3 13 -2 16 2 7 4 -8 11 -18 17 -21 11 -8 -80 -78 -138 -107 -57 -28 -143 -54
-158 -49 -6 3 -3 6 9 6 57 2 150 129 161 219 l5 49 27 -28 c14 -15 33 -36 42
-46z m-924 -122 c2 -33 -1 -39 -20 -43 -29 -5 -57 1 -57 13 0 9 60 68 70 69 3
0 6 -18 7 -39z m1053 -11 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4
10 6 0 11 -4 11 -10z m-475 -48 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15
-9 12 -12z"
      />
      <path
        d="M8144 13275 c-138 -25 -235 -69 -319 -145 -30 -28 -53 -50 -51 -50 3
0 31 17 63 39 133 88 210 115 377 131 173 17 352 -5 449 -55 26 -14 47 -22 47
-18 0 5 4 3 8 -3 4 -6 23 -19 42 -29 19 -10 51 -30 70 -45 80 -62 96 -65 40
-6 -104 108 -216 163 -373 185 -102 14 -264 13 -353 -4z"
      />
      <path
        d="M8220 13174 c-126 -27 -288 -122 -342 -202 -11 -16 -29 -25 -58 -29
l-43 -6 27 -14 c32 -17 26 -29 -28 -54 -28 -13 -32 -17 -13 -13 34 8 34 4 1
-46 -47 -70 -19 -57 52 25 14 17 6 1 -17 -35 -34 -53 -37 -61 -15 -40 15 13
37 40 48 58 13 22 23 30 28 22 5 -8 9 -7 13 5 5 11 3 14 -5 9 -8 -5 -9 -2 -5
10 4 10 7 20 7 23 0 3 10 -9 23 -28 43 -65 221 -105 422 -96 138 6 192 21 314
83 70 36 106 48 168 55 45 6 84 16 93 25 13 14 10 20 -35 61 -179 165 -415
235 -635 187z m-109 -82 c-17 -31 -13 -102 8 -148 24 -53 84 -119 130 -145
l36 -20 -100 5 c-171 10 -265 46 -265 102 0 30 21 75 31 68 5 -3 9 3 9 13 0
15 2 16 11 3 6 -8 12 -11 15 -5 2 6 13 25 25 44 16 27 23 31 30 20 6 -10 9 -6
9 14 0 16 4 26 8 23 4 -2 18 9 31 25 26 32 39 33 22 1z m208 -39 c14 -50 14
-49 -9 -71 -20 -18 -19 -59 1 -46 5 3 9 1 9 -4 0 -9 13 -12 70 -12 51 -1 93
48 88 100 -3 35 -2 38 20 34 14 -3 31 -11 39 -19 8 -8 21 -19 30 -23 21 -12
11 -50 -22 -90 -13 -16 -22 -32 -20 -36 3 -3 2 -4 -1 -1 -4 2 -20 -5 -37 -17
-31 -22 -109 -35 -151 -24 -13 3 -43 24 -65 45 -40 39 -41 40 -41 111 0 64 2
71 23 80 43 17 56 12 66 -27z m381 1 c20 -23 35 -32 39 -25 7 11 132 -69 139
-88 3 -10 -56 -21 -114 -21 -39 0 -107 -28 -179 -75 l-30 -19 33 36 c38 40 62
110 62 180 0 26 4 48 8 48 5 0 24 -16 42 -36z"
      />
      <path d="M8751 12994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
      <path
        d="M8765 12969 c-10 -43 -1 -46 12 -4 6 19 7 35 3 35 -5 0 -11 -14 -15
-31z"
      />
      <path
        d="M11114 13008 c-5 -7 -3 -8 5 -4 7 5 19 0 27 -10 14 -18 14 -18 4 4
-12 24 -25 28 -36 10z"
      />
      <path
        d="M11097 12980 c10 -11 19 -20 21 -20 1 0 -2 9 -8 20 -6 11 -15 20 -20
20 -6 0 -2 -9 7 -20z"
      />
      <path d="M7708 12843 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
      <path
        d="M7852 12790 c-28 -37 -29 -51 -1 -16 11 14 25 24 30 21 5 -4 9 -2 9
4 0 23 -18 18 -38 -9z"
      />
      <path d="M8863 12785 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z" />
      <path
        d="M7896 12759 c-25 -42 -16 -44 11 -3 12 19 19 34 15 34 -4 0 -16 -14
-26 -31z"
      />
      <path d="M7946 12753 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
      <path
        d="M9840 12523 c0 -25 54 -204 84 -278 45 -112 70 -153 149 -248 107
-128 168 -271 152 -355 -18 -94 -92 -180 -212 -242 -62 -32 -71 -39 -43 -35
19 4 55 12 80 20 25 7 68 19 97 25 29 6 62 21 74 31 13 11 30 17 38 14 9 -3
12 -3 8 1 -3 4 13 28 36 54 72 79 93 181 62 288 -22 74 -103 188 -183 260 -44
38 -95 99 -135 159 -36 54 -86 118 -111 142 -34 33 -51 62 -67 108 -19 57 -29
77 -29 56z"
      />
      <path
        d="M8935 12168 c-24 -51 -51 -121 -60 -156 -8 -34 -31 -97 -49 -140 -45
-103 -59 -171 -54 -251 6 -77 32 -142 78 -195 39 -44 71 -62 125 -70 39 -7 39
-6 -11 14 -64 25 -120 79 -147 139 -42 94 -30 248 27 346 13 22 29 66 36 98
15 74 60 209 89 265 12 23 19 42 16 42 -4 0 -26 -42 -50 -92z"
      />
      <path d="M13201 12114 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
      <path
        d="M9745 11741 c-62 -22 -134 -58 -157 -79 -43 -37 3 -111 97 -157 51
-26 56 -26 111 -14 32 7 78 27 103 44 78 52 80 109 7 182 -50 49 -78 53 -161
24z"
      />
      <path
        d="M9037 11699 c-24 -14 -57 -82 -57 -119 0 -77 56 -121 152 -119 80 1
108 17 33 19 -54 2 -57 3 -25 10 19 4 61 14 92 21 53 12 59 11 80 -7 12 -10 7
1 -13 26 -41 51 -205 180 -229 180 -8 0 -23 -5 -33 -11z"
      />
      <path
        d="M9795 10615 c-49 -13 -94 -24 -98 -25 -5 0 -6 -4 -3 -8 3 -5 0 -9 -7
-9 -68 -4 -112 -17 -134 -40 -21 -21 -32 -24 -61 -19 -20 3 -38 9 -41 14 -3 5
-28 13 -56 17 -27 4 -61 13 -75 20 -43 21 -98 25 -150 9 -28 -8 -50 -19 -50
-24 0 -5 -7 -7 -15 -4 -8 4 -17 -1 -21 -10 -3 -9 -10 -14 -14 -11 -9 5 -55
-32 -55 -45 0 -4 -13 -19 -30 -32 -28 -22 -37 -23 -200 -23 -141 -1 -177 -4
-209 -18 -21 -10 -37 -20 -35 -22 2 -2 31 4 65 13 53 14 70 14 131 3 46 -9
107 -12 179 -8 113 6 214 24 196 36 -22 14 171 11 286 -5 178 -24 287 -16 432
30 118 37 175 43 245 26 22 -6 102 -13 177 -16 159 -7 244 4 362 47 92 33 113
35 138 12 10 -9 18 -11 18 -5 0 6 -16 20 -36 33 -36 22 -37 22 -83 5 -100 -39
-185 -56 -275 -56 -120 1 -181 17 -305 80 -125 64 -157 68 -276 35z m-457 -82
c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z"
      />
      <path
        d="M9960 10054 c-160 -44 -264 -57 -467 -58 -105 -1 -190 -3 -188 -5 10
-10 142 -31 231 -37 163 -11 358 31 494 106 44 24 35 23 -70 -6z"
      />
      <path d="M11579 8583 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" />
      <path d="M6273 15755 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
      <path
        d="M6280 15694 c0 -10 5 -26 10 -34 8 -11 9 -7 4 15 -8 37 -14 45 -14
19z"
      />
    </g>
  </svg>
);