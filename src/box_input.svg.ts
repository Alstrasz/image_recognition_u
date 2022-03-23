import { get_svg_box } from './box.svg';
import { SvgBoxInputElement } from './interfaces';

export function get_svg_box_input ( { len, pos_x, pos_y, box_px_width, box_px_height, box_px_border, box_padding }: SvgBoxInputElement ): string {
    let acc = '';
    for ( let i = 0; i < len; i++ ) {
        acc += get_svg_box( {
            pos_x: pos_x + i * ( box_px_width + box_padding ),
            pos_y: pos_y,
            px_width: box_px_width,
            px_height: box_px_height,
            px_border: box_px_border,
        } );
    }
    return acc;
}
