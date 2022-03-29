/* eslint-disable @typescript-eslint/no-unused-vars */
import { SvgElement, SvgScene, SVG_ELEMENTS_NAMES } from './interfaces';
import { promises as fs } from 'fs';
import { bezier } from './alphabet';

export async function get_scene_def (): Promise<SvgScene> {
    const sig: string = await fs.readFile( './Brian_Sandoval_Sig.svg', 'utf-8' );

    const name_def: Array<SvgElement> = [
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'Name: ',
                pos_x: 1,
                pos_y: 4,
                font_size: 1,
                textLength: 6,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box_input,
            data: {
                pos_x: 8,
                pos_y: 3,
                box_px_width: 1,
                box_px_height: 1,
                box_px_border: 0.1,
                box_padding: 0.2,
                len: 10,
                current_text: 'BRIAN',
            },
        },
    ];

    const surname_def: Array<SvgElement> = [
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'Surname: ',
                pos_x: 1,
                pos_y: 5.5,
                font_size: 1,
                textLength: 6,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box_input,
            data: {
                pos_x: 8,
                pos_y: 4.5,
                box_px_width: 1,
                box_px_height: 1,
                box_px_border: 0.1,
                box_padding: 0.2,
                len: 10,
                current_text: 'SANDOVAL',
            },
        },
    ];

    const gender_def: Array<SvgElement> = [
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'Gender: ',
                pos_x: 1,
                pos_y: 7,
                font_size: 1,
                textLength: 6,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 8,
                pos_y: 6,
                px_width: 1,
                px_height: 1,
                px_border: 0.1,
                body: '<line x1="0" y1="0" x2="100%" y2="100%" stroke="black" stroke-width="5%" /><line x1="0" y1="100%" x2="100%" y2="0" stroke="black" stroke-width="5%" />',
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'M',
                pos_x: 9.5,
                pos_y: 7,
                font_size: 1,
                textLength: 1,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 14,
                pos_y: 6,
                px_width: 1,
                px_height: 1,
                px_border: 0.1,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'F',
                pos_x: 15.5,
                pos_y: 7,
                font_size: 1,
                textLength: 1,
            },
        },
    ];

    const photo_def: Array<SvgElement> = [
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'Photo: ',
                pos_x: 1,
                pos_y: 8.5,
                font_size: 1,
                textLength: 6,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 8,
                pos_y: 7.5,
                px_width: 3,
                px_height: 4,
                px_border: 0.1,
            },
        },
    ];

    const signature_def: Array<SvgElement> = [
        {
            name: SVG_ELEMENTS_NAMES.label,
            data: {
                text: 'Signature: ',
                pos_x: 1,
                pos_y: 25,
                font_size: 1,
                textLength: 6,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 8,
                pos_y: 24,
                px_width: 4,
                px_height: 2,
                px_border: 0.1,
                body: sig,
            },
        },
    ];

    const filled_rect = '<rect x="0" y="0" width="100%" height="100%" style="fill:rgb(0,0,0);stroke:rgb(0,0,0)" />';
    const border_box_def: Array<SvgElement> = [
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 1,
                pos_y: 1,
                px_width: 1.5,
                px_height: 1.5,
                px_border: 0.1,
                body: filled_rect,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 18.5,
                pos_y: 1,
                px_width: 1.5,
                px_height: 1.5,
                px_border: 0.1,
                body: filled_rect,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 1,
                pos_y: 27.2,
                px_width: 1.5,
                px_height: 1.5,
                px_border: 0.1,
                body: filled_rect,
            },
        },
        {
            name: SVG_ELEMENTS_NAMES.box,
            data: {
                pos_x: 18.5,
                pos_y: 27.2,
                px_width: 1.5,
                px_height: 1.5,
                px_border: 0.1,
                body: filled_rect,
            },
        },
    ];

    return {
        width: 21,
        height: 29.7,
        // elements: name_def.concat( surname_def ).concat( gender_def ).concat( photo_def ).concat( signature_def ).concat( border_box_def ),
        elements: name_def.concat( surname_def ).concat( gender_def ).concat( signature_def ).concat( border_box_def ),
    };
}

