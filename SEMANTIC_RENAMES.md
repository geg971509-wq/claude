# 已审查的 chunk 语义重命名

本次仅完成下列 3 个物理 JavaScript 文件的重命名，不代表仓库全部 `chunk-*.js` 已完成。已有语义映射予以保留；未确认职责的模块仍保留原名，避免使用编号、哈希变体或猜测名称。

## 命名依据

| 原物理路径 | 新物理路径 | 实现职责 |
| --- | --- | --- |
| `bunfs/chunk-0cxwrbmy.js` | `bunfs/modules/workshop/document-renderer.js` | 解析 Workshop 决策与交付物结构，生成决策卡片、状态栏、交付物链接，编排布局并输出包含样式的完整 HTML 文档。 |
| `bunfs/chunk-4ddxwr9r.js` | `bunfs/modules/text/display-formatting.js` | 清理 ANSI 与 HTML 文本、规范化空白，处理文本显示宽度、补齐、换行与截断。 |
| `bunfs/chunk-wag5ye9w.js` | `bunfs/modules/collections/grouping-and-aggregation.js` | 集合分组、计数、求和、去重、分区、排序与键索引。 |

## 构建兼容性

遵循 `SOURCE_NAMING.md`：只修改物理路径，并在 `semantic-paths.json` 增加对应覆盖项。保留 `pathmap.json` 中的原始提取映射，以及源码中的 Bun 虚拟路径、导入字符串和导出符号。

三个新路径直接复用原 Git blob，未改写、格式化或重新编码 JavaScript 内容：

| 文件 | 原／新 blob SHA |
| --- | --- |
| Workshop 文档渲染 | `eb61c6695993db34afab2a1882c66a6b04e99990` |
| 文本显示格式化 | `7b4dbc7e1a3bc311344a941ffb338e8bc5f21ed2` |
| 集合分组与聚合 | `780b8ee1d51c16f053633e970b119e0a866eca6f` |

## 验证范围

本提交使用原 blob 创建新路径，保证上述三个 JavaScript 文件字节不变。尚未运行仓库静态校验脚本或完整二进制构建，不能据此声称运行测试通过。

在完整工作副本中运行：

```sh
node scripts/check-semantic-names.mjs
node scripts/list-unmapped-chunks.mjs --json
```

完整构建另需满足仓库 `build.sh` 的 macOS arm64 和原始二进制要求。剩余 chunk 的逐个语义审查与重命名尚未完成。
