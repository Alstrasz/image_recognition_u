export const bezier = {
    'A': `<svg version="1.1" x="20%" y="10%" width="70%" height="70%" viewBox="0 0 12 8">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 12 Q 1 4 4 0 Q 7 6 8 12 Q 7 6 6 6 Q 3.5 6 1 6"/>
        </svg>`,
    'B': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 14 14">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 12 Q 0 4 1 0 Q 5 2 4 5 Q 1 6 0 6 Q 3.5 6 5 9 Q 3 13 0 12"/>
        </svg>`,
    'C': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 7 11 Q 0 12 0 6 Q 0 0 6 0"/>
        </svg>`,
    'D': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 10 Q 6 11 6 6 Q 6 0 0 0 Q 0 5 0 11"/>
        </svg>`,
    'E': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 0 6 0 11 Q 3 11 5 11 Q 0 11 0 10 Q 0 8.5 0 6 Q 0 5 5 5 Q 2.5 5 0 5 Q 0 3 0 1 Q 0 0 5 0 Q 2.5 0 0 0"/>
        </svg>`,
    'F': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 0 6 0 11 Q 0 8.5 0 6 Q 0 5 5 5 Q 2.5 5 0 5 Q 0 3 0 1 Q 0 0 5 0 Q 2.5 0 0 0"/>
        </svg>`,
    'G': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 6 1 Q 4.5 0 3 0 Q 0 0 0 6 Q 0 11 4 11 Q 6 11 6 7 Q 9 8 4 7"/>
        </svg>`,
    'H': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 0 6 0 11 Q 0 6 1 6 Q 6 6 6 5 Q 6 2.5 6 0 Q 6 11 7 11"/>
        </svg>`,
    'I': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 2 0 Q 3 0 5 0 Q 3 0 3 1 Q 3 0 3 10 Q 3 11 1 11 Q 3.5 11 5 11"/>
        </svg>`,
    'J': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 2 0 Q 3 0 4 0 Q 3 0 3 0 Q 3 0 4 10 Q 4 11 2 11 Q 1 11 1 8"/>
        </svg>`,
    'K': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 1 3 0 11 Q 0 4 5 0 Q 0 4 1 8 Q 2 9 6 11"/>
        </svg>`,
    'L': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 2 0 Q 1 1 2 10 Q 4 11 7 10"/>
        </svg>`,
    'M': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 11 Q 0 5.5 0 0 Q 1 7 4 9 Q 7 7 8 0 Q 8 5.5 8 11"/>
        </svg>`,
    'N': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 11 Q 0 5.5 0 0 Q 1 6 5 11 Q 6 7 5 0"/>
        </svg>`,
    'O': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 3 11 Q 0 10 0 5 Q 0 1 3 0 Q 7 0 7 5 Q 6 11 3 11"/>
        </svg>`,
    'P': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 1 12 Q 0 5.5 0 0 Q 0 6 4 6 Q 5 -2 0 1"/>
        </svg>`,
    'Q': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 3 11 Q 0 10 0 5 Q 0 1 3 0 Q 7 0 7 5 Q 6 11 3 11 Q 4.5 10.5 6 10 Q 8 12 4 9"/>
        </svg>`,
    'R': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 14 14">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 12 Q 0 4 1 0 Q 5 2 4 5 Q 1 6 0 6 Q 3.5 6 5 12"/>
        </svg>`,
    'S': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 8 4 Q 8 0 4 0 Q 0 1 3 5 Q 8 6 7 9 Q 6 13 0 9"/>
        </svg>`,
    'T': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 4 0 8 0 Q 3 0 3 1 Q 3 6 4 11"/>
        </svg>`,
    'U': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 0 11 3 11 Q 6 11 6 0 Q 6 6 7 11"/>
        </svg>`,
    'V': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 2 8 3 11 Q 5 8 6 0"/>
        </svg>`,
    'W': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 1 8 2 11 Q 4 8 5 0 Q 5 6 7 11 Q 8 5.5 9 0"/>
        </svg>`,
    'X': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 3 5.5 6 11 Q 4 8 3 5 Q 6 3 7 0 Q 2 5 0 11"/>
        </svg>`,
    'Y': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 4 3 3 11 Q 2 3 7 0"/>
        </svg>`,
    'Z': `<svg version="1.1" x="20%" y="20%" width="70%" height="70%" viewBox="-1 -1 13 13">
            <path style="fill:rgb(255,255,255);stroke:rgb(0,0,0)" d="M 0 0 Q 0 1 7 0 Q 2 4 0 11 Q 6 10 7 11"/>
        </svg>`,
};
