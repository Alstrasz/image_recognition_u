import { SvgBoxElement } from './interfaces';

export function get_svg_box ( { pos_x, pos_y, px_width, px_height, px_border }: SvgBoxElement ): string {
    // return `<path d="M ${pos_x} ${pos_y} H ${pos_x + px_width} V ${pos_y + px_height} H ${pos_x} L ${pos_x} ${pos_y}" style="fill:rgb(255,255,255);stroke-width:${px_border};stroke:rgb(0,0,0)"/>`;
    return `<rect x="${pos_x}" y="${pos_y}" width="${px_width}" height="${px_height}" style="fill:rgb(255,255,255);stroke-width:${px_border};stroke:rgb(0,0,0)" />`;
}
