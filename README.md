# Hello world javascript action

This action adds synthetics monitoring to NewRelic based on a newrelic.yml configuration file

## Inputs

### `create`

**Optional** Name of the file if created in the last commit.
**Optional** Name of the file if updated in the last commit.
**Optional** Name of the file if deleted in the last commit.
**Optional** Contents of the file.

## Example usage

```yaml
- name:
  id: new-relic-synthetic-monitor
  uses: agence-adeliom/new-relic-synthetic-monitoring-action@main
  with:
    create: ${{ steps.changed-files.outputs.added_files }}
    update: ${{ steps.changed-files.outputs.modified_files }}
    delete: ${{ steps.changed-files.outputs.deleted_files }}
    content: ${{ steps.read_file.outputs.contents }}
```