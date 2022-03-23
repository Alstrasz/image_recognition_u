import { get_svg_box } from './box.svg';
import { get_svg_box_input } from './box_input.svg';
import { SvgScene, SVG_ELEMENTS_NAMES } from './interfaces';
import { get_svg_label } from './label.svg';

export function get_svg_scene ( { width, height, elements }: SvgScene ) {
    let acc: string = `<svg width="${width}" height="${height}"><rect width="100%" height="100%" fill="white" />`;
    for ( const el of elements ) {
        if ( el.name == SVG_ELEMENTS_NAMES.box ) {
            acc += get_svg_box( el.data );
        }
        if ( el.name == SVG_ELEMENTS_NAMES.box_input ) {
            acc += get_svg_box_input( el.data );
        }
        if ( el.name == SVG_ELEMENTS_NAMES.label ) {
            acc += get_svg_label( el.data );
        }
    }
    acc += '</svg>';
    return acc;
}

function convert ( val: number, mult: number ) {
    return Math.ceil( val * mult );
}

export function scene_cm_to_px ( dpi: number, scene: SvgScene ) {
    const cm_to_px = dpi / 2.54;
    const ret: SvgScene = {
        height: convert( scene.height, cm_to_px ),
        width: convert( scene.width, cm_to_px ),
        elements: [],
    };
    for ( const el of scene.elements ) {
        if ( el.name == SVG_ELEMENTS_NAMES.box ) {
            ret.elements.push( {
                name: SVG_ELEMENTS_NAMES.box,
                data: {
                    pos_x: convert( el.data.pos_x, cm_to_px ),
                    pos_y: convert( el.data.pos_y, cm_to_px ),
                    px_border: convert( el.data.px_border, cm_to_px ),
                    px_height: convert( el.data.px_height, cm_to_px ),
                    px_width: convert( el.data.px_width, cm_to_px ),
                },
            } );
        }
        if ( el.name == SVG_ELEMENTS_NAMES.box_input ) {
            ret.elements.push( {
                name: SVG_ELEMENTS_NAMES.box_input,
                data: {
                    len: el.data.len,
                    pos_x: convert( el.data.pos_x, cm_to_px ),
                    pos_y: convert( el.data.pos_y, cm_to_px ),
                    box_px_width: convert( el.data.box_px_width, cm_to_px ),
                    box_px_height: convert( el.data.box_px_height, cm_to_px ),
                    box_px_border: convert( el.data.box_px_border, cm_to_px ),
                    box_padding: convert( el.data.box_padding, cm_to_px ),
                },
            } );
        }
        if ( el.name == SVG_ELEMENTS_NAMES.label ) {
            ret.elements.push( {
                name: SVG_ELEMENTS_NAMES.label,
                data: {
                    text: el.data.text,
                    textLength: convert( el.data.textLength, cm_to_px ),
                    pos_x: convert( el.data.pos_x, cm_to_px ),
                    pos_y: convert( el.data.pos_y, cm_to_px ),
                    font_size: convert( el.data.font_size, cm_to_px ),
                },
            } );
        }
    }
    return ret;
}
