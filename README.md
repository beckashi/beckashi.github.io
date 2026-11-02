# Chuanbeibei Shi's Website

Personal academic website, served by GitHub Pages at <https://beckashi.github.io>.

## Updating content

Almost everything lives in plain YAML files under `_data/`; you rarely need to touch HTML.

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Name, position, links, email  | `_data/main_info.yaml`                  |
| Bio paragraphs                | `index.html` (the `ABOUT` section)      |
| News                          | `_data/news.yaml` (newest first)        |
| Publications                  | `_data/publications.yaml`               |
| Projects                      | `_data/projects.yaml`                   |
| Education / Experience        | `_data/education.yaml`, `_data/experience.yaml` |
| Reviewing and awards          | `_data/service.yaml`                    |
| Profile photo                 | `assets/profile-pics/me.jpg` (square, at least 600x600 px) |
| CV button (optional)          | add a PDF under `assets/cv/`, then set `cv:` in `main_info.yaml` |
| Paper PDFs                    | `assets/publications/`, then set `pdf:` in `publications.yaml` |
| Project images (optional)     | `assets/projects/`, then set `image:` in `projects.yaml` |
| Colours and layout            | `libs/custom/site.css`                  |

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000>.
