<script>
// const BASE_URL = "http://47.107.70.187:8090/";
const BASE_URL = "http://localhost:8090/";
const Film_Type = [
  { value: "", label: "不限" },
  { value: "剧情", label: "剧情" },
  { value: "喜剧", label: "喜剧" },
  { value: "动作", label: "动作" },
  { value: "爱情", label: "爱情" },
  { value: "科幻", label: "科幻" },
  { value: "动画", label: "动画" },
  { value: "悬疑", label: "悬疑" },
  { value: "惊悚", label: "惊悚" },
  { value: "恐怖", label: "恐怖" },
  { value: "犯罪", label: "犯罪" },
  { value: "同性", label: "同性" },
  { value: "音乐", label: "音乐" },
  { value: "歌舞", label: "歌舞" },
  { value: "传记", label: "传记" },
  { value: "历史", label: "历史" },
  { value: "战争", label: "战争" },
  { value: "西部", label: "西部" },
  { value: "奇幻", label: "奇幻" },
  { value: "冒险", label: "冒险" },
  { value: "灾难", label: "灾难" },
  { value: "武侠", label: "武侠" },
  { value: "情色", label: "情色" }
];
const Film_Country = [
  { value: "", label: "不限" },
  { value: "中国大陆", label: "中国大陆" },
  { value: "美国", label: "美国" },
  { value: "香港", label: "香港" },
  { value: "台湾", label: "台湾" },
  { value: "日本", label: "日本" },
  { value: "韩国", label: "韩国" },
  { value: "英国", label: "英国" },
  { value: "法国", label: "法国" },
  { value: "德国", label: "德国" },
  { value: "意大利", label: "意大利" },
  { value: "西班牙", label: "西班牙" },
  { value: "印度", label: "印度" },
  { value: "泰国", label: "泰国" },
  { value: "俄罗斯", label: "俄罗斯" },
  { value: "伊朗", label: "伊朗" },
  { value: "加拿大", label: "加拿大" },
  { value: "澳大利亚", label: "澳大利亚" },
  { value: "爱尔兰", label: "爱尔兰" },
  { value: "瑞典", label: "瑞典" },
  { value: "巴西", label: "巴西" },
  { value: "丹麦", label: "丹麦" }
];
const Film_Language = [
  { value: "", label: "不限" },
  { value: "英语", label: "英语" },
  { value: "粤语", label: "粤语" },
  { value: "汉语普通话", label: "汉语普通话" },
  { value: "法语", label: "法语" },
  { value: "泰语", label: "泰语" },
  { value: "波兰语", label: "波兰语" },
  { value: "拉丁语", label: "拉丁语" },
  { value: "印地语", label: "印地语" },
  { value: "日语", label: "日语" },
  { value: "韩语", label: "韩语" },
  { value: "德语", label: "德语" },
  { value: "意大利语", label: "意大利语" },
  { value: "西班牙语", label: "西班牙语" },
  { value: "葡萄牙语", label: "葡萄牙语" },
  { value: "瑞典语", label: "瑞典语" },
  { value: "波斯语", label: "波斯语" },
  { value: "捷克语", label: "捷克语" },
  { value: "挪威语", label: "挪威语" },
  { value: "丹麦语", label: "丹麦语" },
  { value: "俄语", label: "俄语" },
  { value: "印度尼西亚语", label: "印度尼西亚语" }
];
export default {
  BASE_URL,
  Film_Type,
  Film_Country,
  Film_Language
};
</script>
