import { beginCell, Cell, Dictionary } from '@ton/core';
import { sha256_sync } from '@ton/crypto';


const ONCHAIN_CONTENT_PREFIX = 0x00;
const SNAKE_PREFIX = 0x00;
const CELL_MAX_SIZE_BYTES = Math.floor((1023 - 8) / 8);

function bufferToChunks(buff: Buffer, chunkSize: number) {
    let chunks: Buffer[] = [];
    while (buff.byteLength > 0) {
        chunks.push(buff.slice(0, chunkSize));
        buff = buff.slice(chunkSize);
    }
    return chunks;
}

export function makeSnakeCell(data: Buffer) {
    let chunks = bufferToChunks(data, CELL_MAX_SIZE_BYTES);
    const b = chunks.reduceRight((curCell, chunk, index) => {
        if (index === 0) {
            curCell.storeInt(SNAKE_PREFIX, 8);
        }
        curCell.storeBuffer(chunk);
        if (index > 0) {
            const cell = curCell.endCell();
            return beginCell().storeRef(cell);
        } else {
            return curCell;
        }
    }, beginCell());
    return b.endCell();
}

const toKey = (key: string) => {
    return BigInt(`0x${sha256_sync(key).toString('hex')}`);
};

export function buildOnchainMetadata(data: {
    name: string;
    description: string;
    image: string;
    symbol: string;
}): Cell {
    let dict = Dictionary.empty(
        Dictionary.Keys.BigUint(256),
        Dictionary.Values.Cell()
    );
    Object.entries(data).forEach(([key, value]) => {
        dict.set(toKey(key), makeSnakeCell(Buffer.from(value, 'utf8')));
    });

    return beginCell()
        .storeInt(ONCHAIN_CONTENT_PREFIX, 8)
        .storeDict(dict)
        .endCell();
}

export function getDedustSwapData(): Cell {
    // let dict = Dictionary.empty(
    //     Dictionary.Keys.BigUint(256),
    //     Dictionary.Values.Cell()
    // );
    let value = Dictionary.empty(
        Dictionary.Keys.BigUint(256),
        Dictionary.Values.Cell()
    );
    //
    // dict.set(toKey('is_right'), makeSnakeCell(Buffer.from('true', 'utf8')));
    // value.set(toKey('sum_type'), makeSnakeCell(Buffer.from('DedustSwap', 'utf8')));
    // value.set(toKey('op_code'), makeSnakeCell(Buffer.from('3818968194', 'utf8')));
    // dict.set(toKey('value'),
    //     beginCell()
    //         .storeInt(ONCHAIN_CONTENT_PREFIX, 8)
    //         .storeDict(value)
    //         .endCell()
    // );

    value.set(toKey('pool_addr'), makeSnakeCell(Buffer.from('0:48d43aec5433d60d19c711d91aeb413f5c18cd31a79381eadf3d81616f3a2886', 'utf8')));

    return beginCell()
        .storeInt(ONCHAIN_CONTENT_PREFIX, 8)
        .storeDict(value)
        .endCell();
}