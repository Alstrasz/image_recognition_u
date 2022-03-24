export interface SvgScene {
    width: number,
    height: number,
    elements: Array<SvgElement>
}

export enum SVG_ELEMENTS_NAMES {
    box = 'box',
    box_input = 'box_input',
    label = 'label'
}

export type SvgElement =
{
    name: SVG_ELEMENTS_NAMES.box
    data: SvgBoxElement,
} | {
    name: SVG_ELEMENTS_NAMES.box_input
    data: SvgBoxInputElement,
} | {
    name: SVG_ELEMENTS_NAMES.label
    data: SvgLabelElement,
}

export interface SvgBoxElement {
    pos_x: number,
    pos_y: number,
    px_width: number,
    px_height: number,
    px_border: number,
    body?: string,
}

export interface SvgBoxInputElement {
    len: number,
    pos_x: number,
    pos_y: number,
    box_px_width: number,
    box_px_height: number,
    box_px_border: number,
    box_padding: number,
    current_text?: string,
}

export interface SvgLabelElement {
    text: string,
    pos_x: number,
    pos_y: number,
    font_size: number,
    textLength: number,
}
