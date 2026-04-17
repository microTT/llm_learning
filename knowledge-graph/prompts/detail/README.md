# Detail Prompt Workspace

每个 detail shard 对应一个独立目录。

- 目录形态：`prompts/detail/<shardId>/question.txt` + `prompts/detail/<shardId>/answer.md`。
- 你可以直接把外部知识 AI 的回答粘贴到对应的 `answer.md`。
- `prompts/detail/global-background.txt` 是可复用的全局背景说明，适合贴到所有外部调研任务的默认上下文里。
- `answer.md` 建议只包含一个 JSON 对象；如果包在 ```json code fence 里，导入脚本也能解析。
- 返回内容形状固定为：

```json
{ "shardId": "<shard-id>", "nodes": { "<pathKey>": { ...detailFields } } }
```

- 以 `prompts/detail/manifest.json` 里的 `answerFile` 字段为准。
