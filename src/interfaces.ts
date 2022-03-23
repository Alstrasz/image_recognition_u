export interface SvgScene {
    width: number,
    height: number,
    elements: Array<SvgElement>
}

export type SvgElement =
{
    name: 'box'
    data: SvgBoxElement,
} | {
    name: 'box_input',
    data: SvgBoxInputElement,
} | {
    name: 'label',
    data: SvgLabelElement,
}


export enum SVG_ELEMENTS_NAMES {
    box = 'box',
    box_input = 'box_input',
    label = 'label'
}

export interface SvgBoxElement {
    pos_x: number,
    pos_y: number,
    px_width: number,
    px_height: number,
    px_border: number
}

export interface SvgBoxInputElement {
    len: number,
    pos_x: number,
    pos_y: number,
    box_px_width: number,
    box_px_height: number,
    box_px_border: number,
    box_padding: number
}

export interface SvgLabelElement {
    text: string,
    pos_x: number,
    pos_y: number,
    font_size: number,
    textLength: number
}
