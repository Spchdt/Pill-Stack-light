const width = 192;
const height = 490;

const Twidth = 71;
const Theight = 94;
const Tspace = 6;

const timeArray = [];
for (let i = 0; i < 10; i++) {
  timeArray.push(`Time/${i}.png`);
}

const timeArrayAOD = [];
for (let i = 0; i < 10; i++) {
  timeArray.push(`AOD/${i}.png`);
}

const weekArray = [];
for (let i = 1; i <= 7; i++) {
  weekArray.push(`Week/${i}.png`);
}

const dayArray = [];
for (let i = 0; i <= 31; i++) {
  dayArray.push(`Day/${i}.png`);
}

const numArray = [];
for (let i = 0; i < 10; i++) {
  numArray.push(`Num/${i}.png`);
}

const monthArray = [];
for (let i = 1; i < 13; i++) {
  monthArray.push(`Month/${i}.png`);
}

WatchFace({
  onInit() {
    console.log("index page.js on init invoke");
  },

  build() {
    console.log("index page.js on build invoke");

    const editBg = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_BG, {
      edit_id: 101,
      x: 0,
      y: 0,
      bg_config: [
        { id: 1, preview: 'Color/Color1.png', path: 'Color/Color1.png' },
        { id: 2, preview: 'Color/Color2.png', path: 'Color/Color2.png' },
        { id: 3, preview: 'Color/Color3.png', path: 'Color/Color3.png' },
        { id: 4, preview: 'Color/Color4.png', path: 'Color/Color4.png' },
        { id: 5, preview: 'Color/Color5.png', path: 'Color/Color5.png' },
        { id: 6, preview: 'Color/Color6.png', path: 'Color/Color6.png' },
        { id: 7, preview: 'Color/Color7.png', path: 'Color/Color7.png' },
        { id: 8, preview: 'Color/Color8.png', path: 'Color/Color8.png' },
        { id: 9, preview: 'Color/Color9.png', path: 'Color/Color9.png' },
        { id: 10, preview: 'Color/Color10.png', path: 'Color/Color10.png' }
      ],
      count: 10,
      default_id: 1,
      fg: 'Other/fg.png',
      tips_x: 47,
      tips_y: 25,
      tips_bg: 'Other/tip.png',
    });

    let timeText = hmUI.createWidget(hmUI.widget.IMG_TIME, {
      hour_zero: 1, // Whether to make up zero.
      hour_startX: 22,
      hour_startY: 142,
      hour_array: timeArray,
      hour_space: Tspace,
      hour_align: hmUI.align.CENTER_H,

      minute_zero: 1,
      minute_startX: 22,
      minute_startY: 244,
      minute_array: timeArray,
      minute_space: Tspace,
      minute_align: hmUI.align.CENTER_H,

      second_zero: 1,
      second_startX: width/2 - 14,
      second_startY: 360,
      second_space: -1,
      second_array: numArray,

      am_x: 128,
      am_x: 128, am_y: 105,   
      am_sc_path: 'Other/am.png',
      am_en_path: 'Other/am.png',

      pm_x: 128,
      pm_x: 128, pm_y: 105,   
      pm_sc_path: 'Other/pm.png',
      pm_en_path: 'Other/pm.png',
    });

    // const timeTextAOD = hmUI.createWidget(hmUI.widget.IMG_TIME, {
    //   hour_zero: 1, // Whether to make up zero.
    //   hour_startX: 22,
    //   hour_startY: 142,
    //   hour_array: timeArrayAOD,
    //   hour_space: Tspace,
    //   hour_align: hmUI.align.CENTER_H,

    //   minute_zero: 1,
    //   minute_startX: 22,
    //   minute_startY: 244,
    //   minute_array: timeArrayAOD,
    //   minute_space: Tspace,
    //   minute_align: hmUI.align.CENTER_H,
    //   show_level: hmUI.show_level.ONLY_AOD
    // });

    let weekText = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
      x: width / 2 - 48,
      y: 395,
      week_en: weekArray,
      week_tc: weekArray,
      week_sc: weekArray,
      week_align: hmUI.align.RIGHT
    });

    let dateText = hmUI.createWidget(hmUI.widget.IMG_DATE, {
      day_startX: width / 2 + 17,
      day_startY: 395 + 4,
      day_align: hmUI.align.LEFT,
      day_zero: 1,
      day_space: -2,
      day_is_character: true,
      day_en_array: dayArray,
      day_sc_array: dayArray,
      day_tc_array: dayArray,

      month_startX: width / 2 - 128 / 2,
      month_startY: 422,
      month_zero: 0,
      month_is_character: true,
      month_en_array: monthArray,
      month_sc_array: monthArray,
      month_tc_array: monthArray
    });

    let batteryText = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: width / 2 - 52 / 2,
      y: 75,
      font_array: numArray,
      align_h: hmUI.align.CENTER_H,
      h_space: -1,
      type: hmUI.data_type.BATTERY,
      unit_en: "Num/percent.png",
      unit_tc: "Num/percent.png",
      unit_sc: "Num/percent.png",
    });

    const bluetooth = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 57,
      y: 30,
      align_h: hmUI.align.CENTER_H,
      type: hmUI.system_status.DISCONNECT,
      src: "Status/bluetooth.png",
    });

    const dnd = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 89,
      y: 31,
      align_h: hmUI.align.CENTER_H,
      type: hmUI.system_status.DISTURB,
      src: "Status/dnd.png",
    });

    const lock = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
      x: 120,
      y: 31,
      align_h: hmUI.align.CENTER_H,
      type: hmUI.system_status.LOCK,
      src: "Status/lock.png",
    });
  },

  onDestroy() {
    console.log("index page.js on destroy invoke");
  },
});
