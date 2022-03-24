import { SvgBoxElement } from './interfaces';

export function get_svg_box ( { pos_x, pos_y, px_width, px_height, px_border, body }: SvgBoxElement, ignore_body: boolean = false ): string {
    // return `<path d="M ${pos_x} ${pos_y} H ${pos_x + px_width} V ${pos_y + px_height} H ${pos_x} L ${pos_x} ${pos_y}" style="fill:rgb(255,255,255);stroke-width:${px_border};stroke:rgb(0,0,0)"/>`;
    if ( ignore_body || !body ) {
        return `<rect x="${pos_x}" y="${pos_y}" width="${px_width}" height="${px_height}" style="fill:rgb(255,255,255);stroke-width:${px_border};stroke:rgb(0,0,0)" />`;
    }
    return `<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 ${px_width + px_border} ${px_height + px_border}" x="${
        pos_x - px_border / 2
    }" y="${
        pos_y - px_border / 2
    }" width="${
        px_width + px_border
    }" height="${
        px_height + px_border
    }"><rect x="${
        px_border / 2
    }" y="${
        px_border / 2
    }" width="${
        px_width
    }" height="${
        px_height
    }" style="fill:rgb(255,255,255);stroke-width:${
        px_border
    };stroke:rgb(0,0,0)" />${
        body
    }</svg>`;
}
