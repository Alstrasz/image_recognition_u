import * as sharp from 'sharp';

import { SvgElement, SvgScene, SVG_ELEMENTS_NAMES } from './interfaces';
import * as fs from 'fs';
import { get_svg_scene, scene_cm_to_px } from './scene.svg';

/*
( sharp.default( {
    create: {
        width: 300,
        height: 200,
        channels: 4,
        background: { r: 255, g: 255, b: 0, alpha: 0.1 },
    },
} ).composite( [
    {
        input: Buffer.from( '<svg width="20" height="20"><g stroke-width="2" stroke="#000000"><rect x="0" y="0" width="20" height="20" fill="rgba(0,0,0,0)"/></g></svg>' ),
        blend: 'over',
        top: 10,
        left: 10,
    },
    {
        input: Buffer.from( '<svg width="18" height="18"><text x="0" y="18" textLength="18" lengthAdjust="spacingAndGlyphs" style="font: 18px cursive">M</text></svg>' ),
        blend: 'over',
        top: 11,
        left: 11,
    },
] ) ).composite( [] )

    .toFile( 'output.png' );
*/

/*
const scene_def: SvgScene = {
    width: 200,
    height: 100,
    elements: [
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'Name: ',
                pos_x: 10,
                pos_y: 30,
                font_size: 10,
                textLength: 50,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box_input,
            data: {
                pos_x: 60,
                pos_y: 10,
                box_px_width: 18,
                box_px_height: 20,
                box_px_border: 1,
                box_padding: 4,
                len: 6,
            },
        },
    ],
};
*/

const name_def: Array<SvgElement> = [
    {
        name: SVG_ELEMENTS_NAMES.label,
        data: {
            text: 'Name: ',
            pos_x: 1,
            pos_y: 2,
            font_size: 1,
            textLength: 6,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.box_input,
        data: {
            pos_x: 8,
            pos_y: 1,
            box_px_width: 1,
            box_px_height: 1,
            box_px_border: 0.1,
            box_padding: 0.2,
            len: 10,
        },
    },
];

const surname_def: Array<SvgElement> = [
    {
        name: SVG_ELEMENTS_NAMES.label,
        data: {
            text: 'Surname: ',
            pos_x: 1,
            pos_y: 3.5,
            font_size: 1,
            textLength: 6,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.box_input,
        data: {
            pos_x: 8,
            pos_y: 2.5,
            box_px_width: 1,
            box_px_height: 1,
            box_px_border: 0.1,
            box_padding: 0.2,
            len: 10,
        },
    },
];

const gender_def: Array<SvgElement> = [
    {
        name: SVG_ELEMENTS_NAMES.label,
        data: {
            text: 'Gender: ',
            pos_x: 1,
            pos_y: 5,
            font_size: 1,
            textLength: 6,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.label,
        data: {
            text: 'M',
            pos_x: 9.5,
            pos_y: 5,
            font_size: 1,
            textLength: 1,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.box_input,
        data: {
            pos_x: 8,
            pos_y: 4,
            box_px_width: 1,
            box_px_height: 1,
            box_px_border: 0.1,
            box_padding: 0.2,
            len: 1,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.label,
        data: {
            text: 'F',
            pos_x: 15.5,
            pos_y: 5,
            font_size: 1,
            textLength: 1,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.box_input,
        data: {
            pos_x: 14,
            pos_y: 4,
            box_px_width: 1,
            box_px_height: 1,
            box_px_border: 0.1,
            box_padding: 0.2,
            len: 1,
        },
    },
];

const photo_def: Array<SvgElement> = [
    {
        name: SVG_ELEMENTS_NAMES.label,
        data: {
            text: 'Photo: ',
            pos_x: 1,
            pos_y: 6.5,
            font_size: 1,
            textLength: 6,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.box_input,
        data: {
            pos_x: 8,
            pos_y: 5.5,
            box_px_width: 3,
            box_px_height: 4,
            box_px_border: 0.1,
            box_padding: 0.2,
            len: 1,
        },
    },
];

const signature_def: Array<SvgElement> = [
    {
        name: SVG_ELEMENTS_NAMES.label,
        data: {
            text: 'Signature: ',
            pos_x: 1,
            pos_y: 27,
            font_size: 1,
            textLength: 6,
        },
    },
    {
        name: SVG_ELEMENTS_NAMES.box_input,
        data: {
            pos_x: 8,
            pos_y: 26,
            box_px_width: 4,
            box_px_height: 2,
            box_px_border: 0.1,
            box_padding: 0.2,
            len: 1,
        },
    },
];

const scene_def: SvgScene = {
    width: 21,
    height: 29.7,
    elements: name_def.concat( surname_def ).concat( gender_def ).concat( photo_def ).concat( signature_def ),
};

sharp.default( Buffer.from( get_svg_scene( scene_cm_to_px( 300, scene_def ) ) ) ).png().toFile( 'output.png' );

fs.writeFile( 'output.svg', get_svg_scene( scene_def ), ( err ) => {
    console.log( err );
} );
