import { SvgLabelElement } from './interfaces';

export function get_svg_label ( { text, pos_x, pos_y, font_size, textLength }: SvgLabelElement ): string {
    return `<text><tspan x="${pos_x}" y="${pos_y}" font-size="${font_size}" font-family="Arial, Helvetica, monospace" textLength="${textLength}">${text}</tspan></text>`;
}
