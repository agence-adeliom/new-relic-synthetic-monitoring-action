import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const created: string = core.getInput('create');
    const updated: string = core.getInput('update');
    const deleted: string = core.getInput('delete');
    const content: string = core.getInput('content');
    core.setOutput('create', created);
    core.setOutput('update', updated);
    core.setOutput('delete', deleted);
    core.setOutput('content', content);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
