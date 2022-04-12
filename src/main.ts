import * as sharp from 'sharp';

import * as fs from 'fs';
import { get_svg_scene, scene_cm_to_px } from './scene.svg';
import { get_scene_def } from './scene.def';
import { bezier } from './alphabet';
import { ImageHandler } from './image_handler';

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
( async function () {
    const scene_def_cm = await get_scene_def();
    const scene_def_px = scene_cm_to_px( 300, scene_def_cm );
    const scene_svg = get_svg_scene( scene_def_px );
    const scene_svg_comic_sans = get_svg_scene( scene_def_px, false, 'Comic Sans MS' );
    const scene_svg_custom_font = get_svg_scene( scene_def_px, false, 'Comic Sans MS', bezier );
    const scene_svg_ignore_inner = get_svg_scene( scene_def_px, true );

    fs.writeFile( './output/scene_cm.json', JSON.stringify( scene_def_cm, null, 2 ), ( err ) => {
        console.log( err );
    } );

    fs.writeFile( './output/scene_px.json', JSON.stringify( scene_def_px, null, 2 ), ( err ) => {
        console.log( err );
    } );

    fs.writeFile( './output/output.svg', scene_svg, ( err ) => {
        console.log( err );
    } );

    sharp.default( Buffer.from( scene_svg ) ).png().toFile( './output/output.png' );

    fs.writeFile( './output/clean_output.svg', scene_svg_ignore_inner, ( err ) => {
        console.log( err );
    } );

    sharp.default( Buffer.from( scene_svg_ignore_inner ) ).png().toFile( './output/clean_output.png' );

    fs.writeFile( './output/comic_sans_output.svg', scene_svg_comic_sans, ( err ) => {
        console.log( err );
    } );

    sharp.default( Buffer.from( scene_svg_comic_sans ) ).png().toFile( './output/comic_sans_output.png' );

    fs.writeFile( './output/custom_font_output.svg', scene_svg_custom_font, ( err ) => {
        console.log( err );
    } );

    sharp.default( Buffer.from( scene_svg_comic_sans ) ).rotate( 10, { background: 'rgba(255,255,255,255)' } ).png().toFile( './output/rotated_comic_sans_output.png' );

    sharp.default( Buffer.from( scene_svg_comic_sans ) ).resize( Math.floor( scene_def_px.width * 0.8 ) ).png().toFile( './output/resized_comic_sans_output.png' );

    sharp.default( Buffer.from( scene_svg_custom_font ) ).png().toFile( './output/custom_font_output.png' );

    const image = sharp.default( Buffer.from( scene_svg_comic_sans ) ).rotate( 10, { background: 'rgba(255,255,255,255)' } ).flatten().grayscale().threshold( 128 ).raw();
    ( sharp.default( Buffer.from( scene_svg_custom_font ) ) as any ).affine( [[1, 0.3], [0.1, 0.7]], {
        background: 'white',
        interpolate: ( sharp as any ).interpolators.nohalo,
    } ).png().toFile( './output/affine.png' );
    const image_metadata = await image.metadata();
    const imag_buffer = await image.toBuffer();
    // eslint-disable-next-line max-len
    sharp.default( imag_buffer, { raw: { width: image_metadata.width || scene_def_px.width, height: image_metadata.height || scene_def_px.width, channels: 1 } } ).png().toFile( './output/colored_tes2t.png' );
    console.log( JSON.stringify( image_metadata, null, 2 ) );
    console.log( new ImageHandler( image_metadata.width || scene_def_px.width, image_metadata.height || scene_def_px.height, imag_buffer ).get_keypints( 0, 4 ) );
    console.log( imag_buffer.filter( ( elem ) => {
        return elem == 255;
    } ).length );
    console.log( imag_buffer.filter( ( elem ) => {
        return elem == 0;
    } ).length );
    console.log( imag_buffer.filter( ( elem ) => {
        return elem > 0;
    } ).length );
    // eslint-disable-next-line max-len
    sharp.default( imag_buffer, { raw: { width: image_metadata.width || scene_def_px.width, height: image_metadata.height || scene_def_px.width, channels: 1 } } ).png().toFile( './output/colored_test.png' );
} )();
