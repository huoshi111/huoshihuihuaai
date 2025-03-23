
// 绘制功能库
const drawFunctions = {
    // 天空元素
    '云朵': (ctx, x, y, size) => {
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(x + i*20, y, size/2 + i*5, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    '太阳': (ctx, x, y) => {
        ctx.beginPath();
        ctx.fillStyle = '#FFD700';
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fill();
    },
    '乌云': (ctx, x, y, size) => {
        ctx.fillStyle = '#666666';
        for(let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.arc(x + i*15, y, size/2 + i*3, 0, Math.PI * 2);
            ctx.fill();
        }
    },
    '闪电': (ctx, x, y) => {
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+10, y+20);
        ctx.lineTo(x-5, y+25);
        ctx.lineTo(x+15, y+45);
        ctx.stroke();
    },
    '月亮': (ctx, x, y) => {
        ctx.beginPath();
        ctx.fillStyle = '#F0E68C';
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
    },
    '星空': (ctx) => {
        for(let i = 0; i < 150; i++) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.5 + 0.3})`;
            ctx.arc(
                Math.random() * 300,
                Math.random() * 150,
                Math.random() * 1.5,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
    },
    '流星': (ctx, x, y) => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 40, y - 40);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + 5, y - 5);
        ctx.lineTo(x + 45, y - 45);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(
                x + Math.random() * 40,
                y - Math.random() * 40,
                Math.random() * 1.5,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
            ctx.fill();
        }
    },
    '飞机': (ctx, x, y) => {
        ctx.fillStyle = 'rgba(192,192,192,0.9)';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x+30, y);
        ctx.lineTo(x+20, y-10);
        ctx.lineTo(x, y-10);
        ctx.fill();
    },

    // 天气效果
    '下雨': (ctx) => {
        ctx.strokeStyle = 'rgba(0, 191, 255, 0.5)';
        for(let i = 0; i < 80; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random()*300, Math.random()*200);
            ctx.lineTo(Math.random()*300+10, Math.random()*200+20);
            ctx.stroke();
        }
    },
    '下雪': (ctx) => {
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        for(let i = 0; i < 150; i++) {
            ctx.beginPath();
            ctx.arc(Math.random()*300, Math.random()*200, 2, 0, Math.PI*2);
            ctx.fill();
        }
    },

    // 地形元素
    '山': (ctx) => {
        ctx.fillStyle = '#4B6455';
        ctx.beginPath();
        ctx.moveTo(-50, 200);
        ctx.bezierCurveTo(50, 50, 250, 80, 350, 200);
        ctx.fill();
        
        ctx.fillStyle = '#3A504B';
        ctx.beginPath();
        ctx.moveTo(0, 200);
        ctx.bezierCurveTo(100, 100, 200, 120, 300, 200);
        ctx.fill();
    },
    '海滩': (ctx) => {
        ctx.fillStyle = '#F4A460';
        ctx.fillRect(0, 180, 300, 20);
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(i*60, 180, 30, Math.PI, Math.PI*2);
            ctx.stroke();
        }
    },
    '沙漠': (ctx) => {
        ctx.fillStyle = '#D2B48C';
        ctx.fillRect(0, 180, 300, 20);
        ctx.beginPath();
        ctx.moveTo(0, 180);
        ctx.quadraticCurveTo(150, 160, 300, 180);
        ctx.fill();
    },

    // 城市元素
    '城市': (ctx) => {
        for(let i = 0; i < 6; i++) {
            const x = 30 + i*50;
            const h = 60 + Math.random()*80;
            ctx.fillStyle = '#555';
            ctx.fillRect(x, 200-h, 40, h);
            
            for(let y = 200-h+10; y < 200-10; y += 15) {
                ctx.fillStyle = Math.random() > 0.7 ? '#FFD700' : '#444';
                ctx.fillRect(x+5, y, 8, 8);
            }
        }
    },
    '夜灯': (ctx) => {
        for(let i = 0; i < 30; i++) {
            ctx.fillStyle = `hsl(${Math.random()*360}, 70%, 50%)`;
            ctx.beginPath();
            ctx.arc(Math.random()*300, Math.random()*50, 3, 0, Math.PI*2);
            ctx.fill();
        }
    },

    // 其他元素
    '五角星': (ctx, x, y) => {
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        for(let i = 0; i < 5; i++) {
            const angle = i * 4 * Math.PI/5;
            ctx.lineTo(
                x + Math.cos(angle) * 20,
                y + Math.sin(angle) * 20
            );
        }
        ctx.closePath();
        ctx.fill();
    },
    '人': (ctx, x) => {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, 170, 5, 0, Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, 175);
        ctx.lineTo(x, 190);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x-10, 180);
        ctx.lineTo(x+10, 180);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, 190);
        ctx.lineTo(x-8, 200);
        ctx.moveTo(x, 190);
        ctx.lineTo(x+8, 200);
        ctx.stroke();
    },

    // 地面元素
    '草': (ctx, x) => {
        ctx.strokeStyle = '#00FF00';
        ctx.lineWidth = 2;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(x, 200);
            ctx.lineTo(x + Math.random()*10 -5, 180 + Math.random()*10);
            ctx.stroke();
        }
    },
    '花': (ctx, x) => {
        ctx.strokeStyle = '#00FF00';
        ctx.beginPath();
        ctx.moveTo(x, 200);
        ctx.lineTo(x, 180);
        ctx.stroke();
        
        const colors = ['#FF1493','#FFD700','#FF4500'];
        ctx.fillStyle = colors[Math.floor(Math.random()*colors.length)];
        ctx.beginPath();
        ctx.arc(x, 175, 5, 0, Math.PI*2);
        ctx.fill();
    },
    '河': (ctx) => {
        ctx.fillStyle = '#0faef753';
        ctx.beginPath();
        ctx.arc(150, 200, 80, 0, Math.PI);
        ctx.fill();
    },
    '石头': (ctx, x) => {
        ctx.fillStyle = '#808080';
        ctx.beginPath();
        ctx.arc(x, 195, 5 + Math.random()*5, 0, Math.PI*2);
        ctx.fill();
    },
    '沙子': (ctx) => {
        ctx.fillStyle = '#F4A460';
        ctx.fillRect(0, 195, 300, 5);
    },
    '泥土': (ctx) => {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, 195, 300, 5);
    },

    '地': (ctx) => {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, 195, 300, 5);
    },

    '雪地': (ctx) => {
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fillRect(0, 180, 300, 20);
    },


// 基础元素
'树': (ctx, x, y, size) => {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(x - size/8, y - size/2, size/4, size/2);
    ctx.beginPath();
    ctx.fillStyle = '#228B22';
    ctx.arc(x, y - size/2, size/3, 0, Math.PI * 2);
    ctx.fill();
},
'房子': (ctx, x, y, size) => {
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(x - size/2, y - size/2, size, size);
    ctx.beginPath();
    ctx.fillStyle = '#FF0000';
    ctx.moveTo(x - size/2, y - size/2);
    ctx.lineTo(x, y - size);
    ctx.lineTo(x + size/2, y - size/2);
    ctx.fill();
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(x - size/4, y - size/4, size/2, size/2);
},

'河流': (ctx, x, y, size) => {
// 绘制河流形状
ctx.beginPath();
ctx.moveTo(x - size, y);
ctx.bezierCurveTo(x - size/2, y - size/3, x + size/2, y + size/3, x + size, y);
ctx.lineTo(x + size, y + size/2);
ctx.lineTo(x - size, y + size/2);
ctx.closePath();

// 填充水色
ctx.fillStyle = 'rgba(65,105,225,0.8)';
ctx.fill();

// 绘制简单水流效果
ctx.strokeStyle = 'rgba(255,255,255,0.3)';
ctx.lineWidth = 2;
for(let i = 0; i < 3; i++) {
ctx.beginPath();
ctx.moveTo(x - size + i*20, y + i*5);
ctx.lineTo(x + size - i*20, y + i*5);
ctx.stroke();
}
},

'彩虹': (ctx, x, y, size) => {
// 彩虹颜色（从外到内）
const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
const lineWidth = size * 0.05; // 彩虹条带宽度

// 绘制彩虹
for (let i = 0; i < colors.length; i++) {
ctx.beginPath();
ctx.strokeStyle = colors[i];
ctx.lineWidth = lineWidth;
ctx.arc(
    x, y + size, // 圆心位置
    size - i * lineWidth, // 半径
    Math.PI, 0 // 从π到0绘制半圆
);
ctx.stroke();
}

// 添加云朵效果（可选）
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
// 左侧云朵
ctx.beginPath();
ctx.arc(x - size * 0.8, y + size * 0.1, size * 0.15, 0, Math.PI * 2);
ctx.arc(x - size * 0.9, y + size * 0.2, size * 0.2, 0, Math.PI * 2);
ctx.arc(x - size * 0.7, y + size * 0.2, size * 0.2, 0, Math.PI * 2);
ctx.fill();
// 右侧云朵
ctx.beginPath();
ctx.arc(x + size * 0.8, y + size * 0.1, size * 0.15, 0, Math.PI * 2);
ctx.arc(x + size * 0.9, y + size * 0.2, size * 0.2, 0, Math.PI * 2);
ctx.arc(x + size * 0.7, y + size * 0.2, size * 0.2, 0, Math.PI * 2);
ctx.fill();
},

'星球': (ctx, x, y, size) => {
// 绘制黑色星空背景
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 300, 200);

// 绘制随机星星
ctx.fillStyle = '#FFF';
for (let i = 0; i < 200; i++) {
const starX = Math.random() * 300;
const starY = Math.random() * 200;
const starSize = Math.random() * 1.5;
ctx.beginPath();
ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
ctx.fill();
}

// 星球主体
const gradient = ctx.createRadialGradient(
x - size * 0.3, y - size * 0.3, size * 0.1, // 光源位置
x, y, size // 星球范围
);
gradient.addColorStop(0, '#FFD700'); // 高光
gradient.addColorStop(0.5, '#CD853F'); // 星球表面
gradient.addColorStop(1, '#8B4513'); // 阴影
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();

// 大气层效果
const atmosphere = ctx.createRadialGradient(x, y, size, x, y, size * 1.2);
atmosphere.addColorStop(0, 'rgba(173, 216, 230, 0.3)');
atmosphere.addColorStop(1, 'rgba(173, 216, 230, 0)');
ctx.beginPath();
ctx.arc(x, y, size * 1.2, 0, Math.PI * 2);
ctx.fillStyle = atmosphere;
ctx.fill();

// 星球纹理（陨石坑）
ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
for (let i = 0; i < 20; i++) {
const angle = Math.random() * Math.PI * 2;
const distance = Math.random() * size * 0.8;
const craterX = x + Math.cos(angle) * distance;
const craterY = y + Math.sin(angle) * distance;
const craterSize = Math.random() * size * 0.1;
ctx.beginPath();
ctx.arc(craterX, craterY, craterSize, 0, Math.PI * 2);
ctx.fill();
}

// 高光反射
ctx.beginPath();
ctx.arc(x + size * 0.2, y - size * 0.2, size * 0.1, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.fill();
},

'土星': (ctx, x, y, size) => {
// 绘制黑色星空背景
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 300, 200);

// 绘制随机星星
ctx.fillStyle = '#FFF';
for (let i = 0; i < 200; i++) {
const starX = Math.random() * 300;
const starY = Math.random() * 200;
const starSize = Math.random() * 1.5;
ctx.beginPath();
ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
ctx.fill();
}

// 土星主体
const planetGradient = ctx.createRadialGradient(
x - size * 0.3, y - size * 0.3, size * 0.1, // 光源位置
x, y, size // 星球范围
);
planetGradient.addColorStop(0, '#F4A460'); // 高光
planetGradient.addColorStop(0.5, '#D2B48C'); // 土星表面
planetGradient.addColorStop(1, '#8B4513'); // 阴影
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fillStyle = planetGradient;
ctx.fill();

// 土星环
ctx.save();
ctx.translate(x, y); // 将坐标系移动到土星中心
ctx.rotate(-0.2); // 倾斜土星环
const ringGradient = ctx.createLinearGradient(-size * 1.5, 0, size * 1.5, 0);
ringGradient.addColorStop(0, 'rgba(169, 169, 169, 0.8)');
ringGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.9)');
ringGradient.addColorStop(1, 'rgba(169, 169, 169, 0.8)');
ctx.beginPath();
ctx.ellipse(0, 0, size * 1.5, size * 0.3, 0, 0, Math.PI * 2);
ctx.fillStyle = ringGradient;
ctx.fill();
ctx.restore();

// 大气层效果
const atmosphere = ctx.createRadialGradient(x, y, size, x, y, size * 1.2);
atmosphere.addColorStop(0, 'rgba(173, 216, 230, 0.3)');
atmosphere.addColorStop(1, 'rgba(173, 216, 230, 0)');
ctx.beginPath();
ctx.arc(x, y, size * 1.2, 0, Math.PI * 2);
ctx.fillStyle = atmosphere;
ctx.fill();

// 高光反射
ctx.beginPath();
ctx.arc(x + size * 0.2, y - size * 0.2, size * 0.1, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
ctx.fill();
},


'激光': (ctx, x, y, angle, length) => {
ctx.strokeStyle = '#00FF00';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(
    x + Math.cos(angle) * length,
    y + Math.sin(angle) * length
);
ctx.stroke();

// 激光光晕
ctx.beginPath();
ctx.arc(x, y, 5, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.fill();
},

// 星云
'星云': (ctx, x, y, size) => {
const gradient = ctx.createRadialGradient(x, y, size * 0.2, x, y, size);
gradient.addColorStop(0, 'rgba(138, 43, 226, 0.8)'); // 紫色
gradient.addColorStop(1, 'rgba(0, 0, 139, 0)'); // 深蓝色
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();
},

// 伽马射线
'伽马射线': (ctx, x, y, length) => {
ctx.strokeStyle = '#FF4500';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + length, y - length);
ctx.stroke();

// 射线光晕
ctx.beginPath();
ctx.arc(x, y, 5, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 69, 0, 0.5)';
ctx.fill();
},

// 黑洞
'黑洞': (ctx, x, y, size) => {
// 黑洞主体
const gradient = ctx.createRadialGradient(x, y, size * 0.5, x, y, size);
gradient.addColorStop(0, '#000000');
gradient.addColorStop(1, '#333333');
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();

// 吸积盘
ctx.strokeStyle = '#FFD700';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
ctx.stroke();
},

// 数字
'数字': (ctx, x, y, text) => {
ctx.font = '20px Arial';
ctx.fillStyle = '#FFFFFF';
ctx.fillText(text, x, y);
},

// 电脑
'电脑': (ctx, x, y, size) => {
// 显示器
ctx.fillStyle = '#333333';
ctx.fillRect(x - size / 2, y - size / 2, size, size * 0.75);

// 屏幕
ctx.fillStyle = '#0000FF';
ctx.fillRect(x - size / 2 + 10, y - size / 2 + 10, size - 20, size * 0.75 - 20);

// 底座
ctx.fillStyle = '#666666';
ctx.fillRect(x - size / 4, y + size * 0.75 / 2, size / 2, size / 4);
},

// 草原
'草原': (ctx) => {
// 草地
ctx.fillStyle = '#6B8E23';
ctx.fillRect(0, 150, 300, 50);

// 草叶
ctx.strokeStyle = '#00FF00';
ctx.lineWidth = 2;
for (let i = 0; i < 50; i++) {
    const x = Math.random() * 300;
    ctx.beginPath();
    ctx.moveTo(x, 150);
    ctx.lineTo(x + Math.random() * 10 - 5, 130 + Math.random() * 20);
    ctx.stroke();
}
},

// 大雨
'大雨': (ctx) => {
ctx.strokeStyle = 'rgba(0, 191, 255, 0.5)';
for (let i = 0; i < 100; i++) {
    const x = Math.random() * 300;
    const y = Math.random() * 200;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 20);
    ctx.stroke();
}
},

// 陨石
'陨石': (ctx, x, y, size) => {
ctx.fillStyle = '#808080';
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fill();

// 陨石坑
ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
for (let i = 0; i < 5; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * size * 0.8;
    const craterX = x + Math.cos(angle) * distance;
    const craterY = y + Math.sin(angle) * distance;
    const craterSize = Math.random() * size * 0.2;
    ctx.beginPath();
    ctx.arc(craterX, craterY, craterSize, 0, Math.PI * 2);
    ctx.fill();
}
},

'极光': (ctx) => {
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(0, 255, 127, 0.8)'); // 绿色
gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // 透明
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 200);

// 极光波纹
ctx.strokeStyle = 'rgba(0, 255, 127, 0.5)';
ctx.lineWidth = 2;
for (let i = 0; i < 10; i++) {
    const y = 50 + Math.random() * 50;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(
        100, y + Math.random() * 20 - 10,
        200, y + Math.random() * 20 - 10,
        300, y
    );
    ctx.stroke();
}
},

// 坦克
'坦克': (ctx, x, y, size) => {
// 履带
ctx.fillStyle = '#808080';
ctx.fillRect(x - size / 2, y + size / 4, size, size / 4);

// 车身
ctx.fillStyle = '#556B2F';
ctx.fillRect(x - size / 3, y - size / 4, size * 0.66, size / 2);

// 炮塔
ctx.beginPath();
ctx.arc(x, y, size / 4, 0, Math.PI * 2);
ctx.fillStyle = '#6B8E23';
ctx.fill();

// 炮管
ctx.strokeStyle = '#2F4F4F';
ctx.lineWidth = size / 10;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + size / 2, y);
ctx.stroke();
},

// 导弹
'导弹': (ctx, x, y, length) => {
// 弹体
ctx.fillStyle = '#B22222';
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + length, y - length / 4);
ctx.lineTo(x + length, y + length / 4);
ctx.closePath();
ctx.fill();

// 尾焰
const flameGradient = ctx.createLinearGradient(x, y, x - length / 2, y);
flameGradient.addColorStop(0, 'rgba(255, 140, 0, 0.8)');
flameGradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
ctx.fillStyle = flameGradient;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x - length / 2, y - length / 8);
ctx.lineTo(x - length / 2, y + length / 8);
ctx.closePath();
ctx.fill();
},


// 高楼大厦绘制函数
'高楼大厦': (ctx, x, y, width, height) => {
// 大楼主体
ctx.fillStyle = '#2F4F4F'; // 深灰色
ctx.fillRect(x, y - height, width, height);

// 窗户
ctx.fillStyle = '#FFD700'; // 金色
const windowWidth = 6; // 窗户宽度
const windowHeight = 6; // 窗户高度
const windowSpacing = 10; // 窗户间距

for (let i = 0; i < height / windowSpacing; i++) {
for (let j = 0; j < width / windowSpacing; j++) {
    // 随机点亮窗户
    if (Math.random() > 0.5) {
        ctx.fillRect(
            x + j * windowSpacing + 2, // 窗户水平位置
            y - height + i * windowSpacing + 2, // 窗户垂直位置
            windowWidth, windowHeight
        );
    }
}
}

// 楼顶天线
ctx.strokeStyle = '#808080'; // 灰色
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(x + width / 2, y - height); // 楼顶中心
ctx.lineTo(x + width / 2, y - height - 20); // 天线顶部
ctx.stroke();

// 楼顶灯光
ctx.fillStyle = '#FF4500'; // 红色
ctx.beginPath();
ctx.arc(x + width / 2, y - height - 20, 3, 0, Math.PI * 2); // 天线顶部灯光
ctx.fill();
},

// 地球（自带黑色背景和星星）
'地球': (ctx, x, y, size) => {
// 绘制黑色背景
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 300, 200);

// 绘制随机星星
ctx.fillStyle = '#FFF';
for (let i = 0; i < 200; i++) {
const starX = Math.random() * 300;
const starY = Math.random() * 200;
const starSize = Math.random() * 1.5;
ctx.beginPath();
ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
ctx.fill();
}

// 地球主体
const gradient = ctx.createRadialGradient(
x - size / 4, y - size / 4, size / 8,
x, y, size
);
gradient.addColorStop(0, '#1E90FF'); // 海洋
gradient.addColorStop(0.5, '#228B22'); // 陆地
gradient.addColorStop(1, '#2F4F4F'); // 阴影
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();

// 云层
ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
for (let i = 0; i < 5; i++) {
const cloudX = x + Math.random() * size - size / 2;
const cloudY = y + Math.random() * size - size / 2;
ctx.beginPath();
ctx.arc(cloudX, cloudY, size / 8, 0, Math.PI * 2);
ctx.fill();
}
},

// 半月月亮（自带黑色背景和星星）
'半月': (ctx, x, y, size) => {
// 绘制黑色背景
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 300, 200);

// 绘制随机星星
ctx.fillStyle = '#FFF';
for (let i = 0; i < 200; i++) {
const starX = Math.random() * 300;
const starY = Math.random() * 200;
const starSize = Math.random() * 1.5;
ctx.beginPath();
ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
ctx.fill();
}

// 月亮主体
ctx.fillStyle = '#F0E68C';
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fill();

// 阴影
ctx.fillStyle = '#2F4F4F';
ctx.beginPath();
ctx.arc(x + size / 2, y, size, 0, Math.PI * 2);
ctx.fill();
},

// 火山
'火山': (ctx, x, y, size) => {
// 火山锥
ctx.fillStyle = '#8B4513';
ctx.beginPath();
ctx.moveTo(x - size, y);
ctx.lineTo(x, y - size * 2);
ctx.lineTo(x + size, y);
ctx.closePath();
ctx.fill();

// 火山口
ctx.fillStyle = '#B22222';
ctx.beginPath();
ctx.arc(x, y - size * 1.8, size / 4, 0, Math.PI * 2);
ctx.fill();

// 熔岩
const lavaGradient = ctx.createLinearGradient(x, y - size * 1.8, x, y - size * 1.5);
lavaGradient.addColorStop(0, '#FF4500');
lavaGradient.addColorStop(1, '#FF8C00');
ctx.fillStyle = lavaGradient;
ctx.beginPath();
ctx.arc(x, y - size * 1.8, size / 4, 0, Math.PI);
ctx.fill();
},

// 树林
'树林': (ctx, x, y, size) => {
for (let i = 0; i < 5; i++) {
    const treeX = x + i * size / 2;
    const treeY = y - Math.random() * size / 4;
    // 树干
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(treeX - size / 20, treeY, size / 10, size / 2);
    // 树冠
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.arc(treeX, treeY, size / 4, 0, Math.PI * 2);
    ctx.fill();
}
},

// 夜空（深蓝色背景 + 星星）
'夜空': (ctx) => {
// 深蓝色背景
ctx.fillStyle = '#000033';
ctx.fillRect(0, 0, 300, 200);

// 绘制随机星星
ctx.fillStyle = '#FFF';
for (let i = 0; i < 200; i++) {
    const starX = Math.random() * 300;
    const starY = Math.random() * 200;
    const starSize = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
    ctx.fill();
}
},

// 夜晚（深紫色背景 + 星星 + 月亮）
'夜晚': (ctx) => {
// 深紫色背景
ctx.fillStyle = '#2E2B5F';
ctx.fillRect(0, 0, 300, 200);

// 绘制随机星星
ctx.fillStyle = '#FFF';
for (let i = 0; i < 200; i++) {
    const starX = Math.random() * 300;
    const starY = Math.random() * 200;
    const starSize = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
    ctx.fill();
}

// 绘制月亮
ctx.fillStyle = '#F0E68C';
ctx.beginPath();
ctx.arc(250, 50, 20, 0, Math.PI * 2);
ctx.fill();
},

// 晚上（深蓝色背景 + 星星 + 城市灯光）
'晚上': (ctx) => {
// 深蓝色背景
ctx.fillStyle = '#000033';
ctx.fillRect(0, 0, 300, 200);

// 绘制随机星星
ctx.fillStyle = '#FFF';
for (let i = 0; i < 200; i++) {
    const starX = Math.random() * 300;
    const starY = Math.random() * 200;
    const starSize = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(starX, starY, starSize, 0, Math.PI * 2);
    ctx.fill();
}

// 绘制城市灯光
ctx.fillStyle = '#FFD700';
for (let i = 0; i < 50; i++) {
    const lightX = Math.random() * 300;
    const lightY = 180 + Math.random() * 20;
    ctx.beginPath();
    ctx.arc(lightX, lightY, 2, 0, Math.PI * 2);
    ctx.fill();
}
},

// 日落（橙色渐变背景 + 太阳）
'日落': (ctx) => {
// 橙色渐变背景
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, '#FF4500'); // 橙色
gradient.addColorStop(1, '#FFD700'); // 金色
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 300, 200);

// 绘制太阳
ctx.fillStyle = '#FF8C00';
ctx.beginPath();
ctx.arc(150, 50, 30, 0, Math.PI * 2);
ctx.fill();
},

'爆炸': (ctx, x, y, size) => {
// 爆炸火焰
const flameColors = ['#FF4500', '#FF8C00', '#FFD700']; // 火焰颜色（红、橙、黄）
for (let i = 0; i < 20; i++) {
const angle = Math.random() * Math.PI * 2; // 随机角度
const distance = Math.random() * size; // 随机距离
const flameX = x + Math.cos(angle) * distance;
const flameY = y + Math.sin(angle) * distance;
const flameSize = Math.random() * size * 0.2;

ctx.fillStyle = flameColors[Math.floor(Math.random() * flameColors.length)];
ctx.beginPath();
ctx.arc(flameX, flameY, flameSize, 0, Math.PI * 2);
ctx.fill();
}

// 爆炸烟雾
ctx.fillStyle = 'rgba(169, 169, 169, 0.8)'; // 灰色烟雾
for (let i = 0; i < 10; i++) {
const angle = Math.random() * Math.PI * 2; // 随机角度
const distance = Math.random() * size * 0.8; // 随机距离
const smokeX = x + Math.cos(angle) * distance;
const smokeY = y + Math.sin(angle) * distance;
const smokeSize = Math.random() * size * 0.3;

ctx.beginPath();
ctx.arc(smokeX, smokeY, smokeSize, 0, Math.PI * 2);
ctx.fill();
}

// 爆炸碎片
ctx.strokeStyle = '#808080'; // 灰色碎片
ctx.lineWidth = 2;
for (let i = 0; i < 15; i++) {
const angle = Math.random() * Math.PI * 2; // 随机角度
const distance = Math.random() * size * 1.5; // 随机距离
const fragmentX = x + Math.cos(angle) * distance;
const fragmentY = y + Math.sin(angle) * distance;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(fragmentX, fragmentY);
ctx.stroke();
}
},

'大海': (ctx) => {
// 绘制海洋背景
const oceanGradient = ctx.createLinearGradient(0, 0, 0, 200);
oceanGradient.addColorStop(0, '#87CEEB'); // 浅蓝色（近海）
oceanGradient.addColorStop(0.5, '#1E90FF'); // 中蓝色
oceanGradient.addColorStop(1, '#000080'); // 深蓝色（深海）
ctx.fillStyle = oceanGradient;
ctx.fillRect(0, 0, 300, 200);

// 绘制波浪
ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; // 白色波浪
ctx.lineWidth = 2;
for (let i = 0; i < 15; i++) {
const y = 150 + Math.random() * 30; // 波浪的垂直位置
ctx.beginPath();
ctx.moveTo(0, y);
ctx.bezierCurveTo(
    100, y + Math.random() * 15 - 7.5,
    200, y + Math.random() * 15 - 7.5,
    300, y
);
ctx.stroke();
}

// 绘制阳光反射
ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; // 白色反射
for (let i = 0; i < 30; i++) {
const x = Math.random() * 300;
const y = Math.random() * 50 + 100;
const size = Math.random() * 15;
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI * 2);
ctx.fill();
}

// 绘制深海波纹
ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)'; // 深色波纹
ctx.lineWidth = 1;
for (let i = 0; i < 10; i++) {
const y = 180 + Math.random() * 20; // 波纹的垂直位置
ctx.beginPath();
ctx.moveTo(0, y);
ctx.bezierCurveTo(
    100, y + Math.random() * 10 - 5,
    200, y + Math.random() * 10 - 5,
    300, y
);
ctx.stroke();
}

// 绘制海鸥（可选）
ctx.strokeStyle = '#FFFFFF'; // 白色海鸥
ctx.lineWidth = 2;
for (let i = 0; i < 5; i++) {
const x = Math.random() * 300;
const y = Math.random() * 50 + 20;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + 10, y - 10);
ctx.moveTo(x, y);
ctx.lineTo(x - 10, y - 10);
ctx.stroke();
}
},

    // 新增元素
    '鸟': (ctx, x, y) => {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 15, y - 5);
        ctx.lineTo(x - 25, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x + 15, y - 5);
        ctx.lineTo(x + 25, y);
        ctx.stroke();
    },
    '动物': (ctx, x, y) => {
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.ellipse(x, y, 15, 25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y - 30, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x - 8, y - 40, 5, 0, Math.PI * 2);
        ctx.arc(x + 8, y - 40, 5, 0, Math.PI * 2);
        ctx.fill();
    },
    '兔子': (ctx, x, y) => {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(x, y, 12, 20, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y - 25, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(x - 3, y - 45, 6, 25);
        ctx.fillRect(x + 3 - 6, y - 45, 6, 25);
    },
    '火': (ctx, x, y) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
        gradient.addColorStop(0, 'rgba(255, 80, 0, 0.9)');
        gradient.addColorStop(1, 'rgba(255, 160, 0, 0.1)');
        ctx.beginPath();
        ctx.moveTo(x - 15, y + 20);
        ctx.quadraticCurveTo(x, y - 30, x + 15, y + 20);
        ctx.fillStyle = gradient;
        ctx.fill();
    },
    '银河系': (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 300, 200);
        gradient.addColorStop(0, 'rgba(25, 25, 112, 0.8)');
        gradient.addColorStop(1, 'rgba(123, 104, 238, 0.6)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 200);
        for(let i = 0; i < 500; i++) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.8})`;
            ctx.arc(
                Math.random() * 300,
                Math.random() * 200,
                Math.random() * 1.2,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
    },
    '狗': (ctx, x, y) => {
        ctx.fillStyle = '#A0522D';
        ctx.fillRect(x - 15, y - 20, 30, 40);
        ctx.beginPath();
        ctx.arc(x, y - 30, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(x - 12, y - 40, 8, 15);
        ctx.fillRect(x + 4, y - 40, 8, 15);
    },
    '车': (ctx, x, y) => {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(x - 25, y - 15, 50, 25);
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(x - 20, y - 12, 40, 12);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(x - 15, y + 10, 8, 0, Math.PI * 2);
        ctx.arc(x + 15, y + 10, 8, 0, Math.PI * 2);
        ctx.fill();
    }
};

// 背景效果
const backgroundEffects = {
    'default': (ctx) => ctx.fillStyle = '#87CEEB',
    '黑夜': (ctx) => {
        ctx.fillStyle = '#000033';
        ctx.fillRect(0, 0, 300, 200);
    },
    '雪天': (ctx) => {
        ctx.fillStyle = '#B0E0E6';
        ctx.fillRect(0, 0, 300, 200);
    },
    '外太空': (ctx) => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 300, 200);
        const nebula = ctx.createRadialGradient(150, 100, 0, 150, 100, 200);
        nebula.addColorStop(0, 'rgba(138, 43, 226, 0.3)');
        nebula.addColorStop(1, 'rgba(0, 0, 139, 0.1)');
        ctx.fillStyle = nebula;
        ctx.fillRect(0, 0, 300, 200);
    }
};

function generateImage(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    // 设置背景
    let bg = 'default';
    if(text.includes('黑夜')) bg = '黑夜';
    if(text.includes('下雪') || text.includes('雪地')) bg = '雪天';
    if(text.includes('外太空') || text.includes('银河系')) bg = '外太空';
    backgroundEffects[bg](ctx);
    ctx.fillRect(0, 0, 300, 200);

    // 自动关联背景
    if(text.includes('星空') && !text.includes('黑夜')) {
        text += ' 黑夜';
        bg = '黑夜';
        backgroundEffects[bg](ctx);
    }

    // 绘制地形
    if(text.includes('山')) drawFunctions.山(ctx);
    if(text.includes('海滩')) drawFunctions.海滩(ctx);
    if(text.includes('沙漠')) drawFunctions.沙漠(ctx);

    // 城市元素
    if(text.includes('城市')) {
        drawFunctions.城市(ctx);
        if(text.includes('夜灯')) drawFunctions.夜灯(ctx);
    }

    // 天气效果
    if(text.includes('下雨')) drawFunctions.下雨(ctx);
    if(text.includes('下雪')) drawFunctions.下雪(ctx);

    // 绘制元素
    const elements = [
        '云朵', '太阳', '乌云', '月亮', '飞机',
        '树', '房子', '草', '花', '河', '极光', '坦克', '导弹', '高楼大厦', '地球', '半月', '火山', '树林', '夜晚', '夜空', '晚上', '日落', '大海', 
        '石头', '沙子', '泥土', '雪地', '激光','星云','伽马射线','黑洞','数字','电脑','草原','大雨','陨石', '爆炸', '地', 
        '五角星', '人', '星空', '流星','河流', '彩虹', '星球', '土星',
        '鸟', '动物', '兔子', '火', '银河系', '狗', '车'
    ];

    elements.forEach(element => {
        if(text.includes(element)) {
            const count = element === '草' ? 10 : 
                         element === '太阳' ? 1 :
                         element === '星空' ? 1 :
                         element === '流星' ? 3 :
                         element === '银河系' ? 1 :
                         3;

            for(let i = 0; i < count; i++) {
                const x = getPosition(element);
                const y = getYPosition(element);
                const size = 30 + Math.random() * 40;
                
                if(['五角星', '人', '鸟'].includes(element)) {
                    drawFunctions[element](ctx, x, y);
                } else if(element === '星空' || element === '银河系') {
                    drawFunctions[element](ctx);
                } else {
                    drawFunctions[element](ctx, x, y, size);
                }
            }
        }
    });

    return canvas.toDataURL();
}

// 位置生成逻辑
function getPosition(element) {
    const positions = {
        '河': 150,
        '城市': () => Math.random()*300,
        '人': () => Math.random()*280 + 10,
        '车': () => Math.random()*250 + 25
    };
    return positions[element] ? 
        (typeof positions[element] === 'function' ? positions[element]() : positions[element]) 
        : Math.random() * 300;
}

function getYPosition(element) {
    const groundElements = [
        '草', '花', '河', '石头', '沙子', 
        '泥土', '雪地', '人', '动物', 
        '兔子', '狗', '车', '火'
    ];
    return groundElements.includes(element) ? 200 : 50 + Math.random() * 100;
}

// 聊天功能
function addMessage(message, isUser = true) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addImageMessage(imageData) {
    const chatMessages = document.getElementById('chat-messages');
    const container = document.createElement('div');
    container.className = 'message ai-message';
    
    const img = new Image();
    img.src = imageData;
    img.style.maxWidth = '250px';
    img.style.borderRadius = '8px';
    
    const downloadLink = document.createElement('a');
    downloadLink.href = imageData;
    downloadLink.download = 'huoshiaiimagepaint.png';
    downloadLink.className = 'download-btn';
    downloadLink.textContent = '下载图片';
    
    container.appendChild(img);
    container.appendChild(downloadLink);
    chatMessages.appendChild(container);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 事件监听
document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, true);
    addMessage('绘画中，请稍等...', false);

    setTimeout(() => {
        document.querySelector('.ai-message:last-child').remove();
        const imageData = generateImage(text);
        addImageMessage(imageData);
    }, 2000);

    input.value = '';
});

document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});
