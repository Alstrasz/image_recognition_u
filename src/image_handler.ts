export class ImageHandler {
    constructor (
        public width: number,
        public height: number,
        public data: Buffer,
    ) {}

    get_pixel ( x: number, y: number ) {
        return this.data[x + y * this.width];
    }

    get_neighbours ( pos: number ) {
        const ret: Array<number> = [];
        // if ( pos % this.width > 0 ) {
        //     ret.push( pos - 1 );
        // }
        // if ( pos % this.width < this.width - 1 ) {
        //     ret.push( pos + 1 );
        // }
        // if ( Math.floor( pos / this.width ) > 0 ) {
        //     ret.push( pos - this.width );
        // }
        // if ( Math.floor( pos / this.width ) < this.height - 1 ) {
        //     ret.push( pos + this.width );
        // }
        for ( let dx = -1; dx <= 1; dx++ ) {
            for ( let dy = -1; dy <= 1; dy++ ) {
                if ( pos % this.width + dx >= 0 && pos % this.width + dx < this.width ) {
                    if ( Math.floor( pos / this.width ) + dy >= 0 && Math.floor( pos / this.width ) + dy < this.height ) {
                        ret.push( pos + dx + dy * this.width );
                    }
                }
            }
        }
        return ret;
    }

    bfs ( pos: number, state: Array<boolean> ) {
        const queue: Array<number> = [pos];
        const fig = [];
        const border = [];
        let iter = 0;
        state[pos] = true;
        while ( iter != queue.length ) {
            let is_border = false;
            for ( const neighbour of this.get_neighbours( queue[iter] ) ) {
                if ( this.data[neighbour] == 255 ) {
                    is_border = true;
                }
                if ( !state[neighbour] && this.data[neighbour] == 0 ) {
                    state[neighbour] = true;
                    queue.push( neighbour );
                }
            }
            if ( this.data[queue[iter]] == 0 ) {
                fig.push( queue[iter] );
                if ( is_border ) {
                    border.push( queue[iter] );
                }
            }
            iter++;
        }
        return {
            figure: fig,
            border: border,
            rel: fig.length / border.length,
        };
    };

    run_bfs () {
        const ret = [];
        const state: Array<boolean> = [];
        state.length = this.data.length;
        state.fill( false, 0, state.length );
        for ( let i = 0; i < this.data.length; i++ ) {
            if ( this.data[i] == 0 && !state[i] ) {
                ret.push( this.bfs( i, state ) );
            }
        }
        console.log( ret[0] );
        for ( const pos of ret[0].figure ) {
            this.data[pos] = 127;
        }
        console.log( ret.length );
        return ret;
    }

    get_keypints ( area_rel_threshold: number, count: number ) {
        const figuers = this.run_bfs();
        return figuers
            .filter( ( elem ) => {
                elem.rel > area_rel_threshold;
            } )
            .sort( ( elem1, elem2 ) => {
                return elem1.figure.length - elem2.figure.length;
            } )
            .slice( 0, count )
            .map( ( elem ) => {
                let acc_x = 0;
                let acc_y = 0;
                for ( const pos of elem.figure ) {
                    acc_x += pos % this.width;
                    acc_y += Math.floor( pos / this.width );
                }
                return {
                    x: acc_x / elem.figure.length,
                    y: acc_y / elem.figure.length,
                };
            } );
    }
}
