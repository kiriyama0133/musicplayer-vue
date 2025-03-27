export interface MusicData {
    filepath: string;
    metadata: {
      title: string;
      artist: string;
      album: string;
      year: string;
      track: string;
      genre: string;
      duration: string;
      bitrate: string;
      cover: Uint8Array | undefined; // 假设 cover 是 Uint8Array 类型
    };
  }