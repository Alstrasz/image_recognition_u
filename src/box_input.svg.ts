import { get_svg_box } from './box.svg';
import { SvgBoxInputElement } from './interfaces';

export function get_svg_box_input ( { len, pos_x, pos_y, box_px_width, box_px_height, box_px_border, box_padding, current_text }: SvgBoxInputElement, ignore_text: boolean = false ): string {
    let acc = '';
    for ( let i = 0; i < len; i++ ) {
        acc += get_svg_box( {
            pos_x: pos_x + i * ( box_px_width + box_padding ),
            pos_y: pos_y,
            px_width: box_px_width,
            px_height: box_px_height,
            px_border: box_px_border,
            body: !ignore_text && current_text && i < current_text.length ?
                `<text x="20%" y="80%" font-size="${
                    Math.ceil( box_px_height * 0.9 )
                }">${
                    current_text[i]
                }</text>` :
                undefined,
        } );
    }
    return acc;
}
